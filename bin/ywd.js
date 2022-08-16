#!/usr/bin/env node

const program = require('commander')
const semver = require('semver')
const chalk = require('chalk')
const minimist = require('minimist')
const figlet = require("figlet")
const requiredVersion = require('../package.json').engines.node
// const create = require('../lib/create')

function checkNodeVersion (wanted, id) {
    if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
      console.log(chalk.red(
        '😣 当前安装的Node版本：' + process.version +
        '，不符合当前版本'+ id +'对Node版本的要求：' + wanted + '\n' +
        '🔺 请升级Node版本后再使用~'
      ))
      process.exit(1)
    }
  }
  
checkNodeVersion(requiredVersion, 'ywd-cli')

program
  .version(`ywd-cli ${require('../package').version}`)
  .usage('<command> [options]')

program
  .command('create <app-name>')
  .description('create a new project powered by ywd-cli')
  .option('-d, --default', 'Skip prompts and use default preset')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .option('--merge', 'Merge target directory if it exists')
  .option('-c, --clone', 'Use git clone when fetching remote preset')
  .action((name, options) => {
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log(chalk.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'))
    }
    require('../lib/create')(name, options)
  })


program.on('--help', () => {
  
   // 使用 figlet 绘制 Logo
   console.log('\r\n' + figlet.textSync('D Y W', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }));
  console.log()
  console.log(`  Run ${chalk.cyan(`ywd <command> --help`)} for detailed usage of given command.`)
  console.log()
})


program.parse(process.argv)