import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
      '@': pathSrc,
    },
  },
  css: {
    
  },
  plugins: [
    vue(),
    // 自动导入vue3的hooks
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router','@vueuse/core'],
      dirs: [
        resolve(pathSrc, 'composables'),
        resolve(pathSrc, 'hooks'),
      ],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      vueTemplate: true,
      dts: resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    // 自动导入 Element Plus 组件
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep', 'carbon'],
        }),
      ],
      dts: resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ],
  build: {
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
    target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
    chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除console
        drop_debugger: true, // 生产环境去除debugger
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        preview: resolve(__dirname, 'preview/index.html'),
      },
      output: {
        manualChunks: {},
      },
    },
  },
  optimizeDeps: {
    include: ['@vueuse/core', 'element-plus'],
  },
  server: {
    host: '0.0.0.0',
    port: 3000, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    proxy: {
      '/api': {
        target: 'https://nest-api.buqiyuan.site/api/admin/',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api/', '/'),
      },
    },
  },
})
