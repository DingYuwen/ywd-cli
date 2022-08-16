const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')

class Creator {
  constructor(name, targetAir) {
    this.name = name
    this.targetAir = targetAir
  }

  // 获取模板
  async getTemplate() {
    const templateDirList = await fs.readdir(path.resolve(__dirname, '../template'))
    if (!templateDirList) return;

    // 选择下载的模板
    const {
      template
    } = await inquirer.prompt({
      name: 'template',
      type: 'list',
      choices: templateDirList,
      message: 'Please choose a template to create project'
    })

    return template

  }

  async create(targetDir) {
    // 获取选择的模板
    const template = await this.getTemplate()
    
    // 复制模板内容到指定目录
    const src = path.resolve(__dirname, '../template', template)
    // 使用 ora 初始化，传入提示信息 message
    const spinner = ora('creating project ...');
    // 开始加载动画
    spinner.start();
    try {
      await fs.copy(src, targetDir);
      spinner.succeed();
    } catch (error) {
      spinner.fail('failed ...')
    }
  }
}

module.exports = async function (name, options) {
  // 执行创建命令

  // 当前命令行选择的目录
  const cwd = process.cwd();
  // 需要创建的目录地址
  const targetAir = path.join(cwd, name)

  // 目录是否已经存在？
  if (fs.existsSync(targetAir)) {

    // 是否为强制创建？
    if (options.force) {
      await fs.remove(targetAir)
    } else {

      // 询问用户是否确定要覆盖
      let {
        action
      } = await inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'Target directory already exists Pick an action:',
        choices: [{
          name: 'Overwrite',
          value: 'overwrite'
        }, {
          name: 'Cancel',
          value: false
        }]
      }])

      if (!action) {
        return;
      } else if (action === 'overwrite') {
        // 移除已存在的目录
        console.log(`\r\nRemoving...`)
        await fs.remove(targetAir)
      }
    }
  }

  // 开始创建项目
  const creator = new Creator(name, targetAir)
  await creator.create(targetAir)

  console.log(`\r\nSuccessfully created project ${chalk.cyan(name)}`)
  console.log(`\r\n  cd ${chalk.cyan(name)}`)
}