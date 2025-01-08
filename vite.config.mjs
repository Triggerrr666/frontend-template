import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 使用 Element Plus 时放开
import ViteImages from 'vite-plugin-vue-images';
import ViteRestart from 'vite-plugin-restart';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入Vue相关API
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: false, // js无需声明文件
      // resolvers: [ElementPlusResolver()], // Element Plus 相关函数
      dirs: [
        // 扫描目录下的模块
        'src/stores/**',
        'src/composables/**',
        'src/utils/**',
      ],
      // 生成eslint 配置
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json', // 生成json 文件
        globalsPropValue: true, // 允许全局使用
      },
    }),
    Components({
      // 自动导入组件的目录
      dirs: ['src/components'],
      deep: true,
      extensions: ['vue' /* 'js' */],
      dts: false,
      resolvers: [
        // ElementPlusResolver()
      ],
    }),
    ViteImages({
      // 自动导入图片
      dirs: ['src/assets/images/**/*.{png,jpg,jpeg,gif,svg}'],
    }),
    ViteRestart({
      // 新建文件时自动重启 & 导入
      restart: ['src/utils/*.js', 'src/composables/*.js'],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
