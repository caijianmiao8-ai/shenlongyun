import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import WindiCSS from 'vite-plugin-windicss';
import legacyPlugin from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-px2rem-exclude';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8989,
    host: '0.0.0.0',
    proxy: {
      '^/dlyp': {
        target: `http://apiyp.dlyphone.com`,
        changeOrigin: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          remUnit: 192, // 设计稿宽度/10
          exclude: /(node_modules)/, //过滤三发ui样式，不进行转换
        }),
      ],
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
    WindiCSS(),
    legacyPlugin({
      targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // ↓解析配置
  resolve: {
    // ↓路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
