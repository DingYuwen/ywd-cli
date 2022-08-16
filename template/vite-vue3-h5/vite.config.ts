import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {VantResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  css: {},
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [VantResolver()],
      types: []
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
      ],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
})
