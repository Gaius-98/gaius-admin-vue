import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/root.scss" as *;'
      }
    }
  },
  server: {
    //代理设置
    proxy: {
      //开发环境
      '/dev': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      //生产环境
      '/prod': {
        target: 'http://xxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prod/, '')
      }
    }
  }
})
