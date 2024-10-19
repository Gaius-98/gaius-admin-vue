// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/github/gaius-admin/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.28_sass@1.74.1/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/github/gaius-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///E:/github/gaius-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///E:/github/gaius-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///E:/github/gaius-admin/vite.config.ts";
var vite_config_default = defineConfig({
  esbuild: {
    pure: ["console.log"],
    drop: ["debugger"]
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
      "/dev": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, "")
      },
      //生产环境
      "/prod": {
        target: "http://120.26.161.36:8899/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prod/, "")
      }
    }
  },
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(name) {
          if (name.includes("node_modules")) {
            return name.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRodWJcXFxcZ2FpdXMtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGdpdGh1YlxcXFxnYWl1cy1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZ2l0aHViL2dhaXVzLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBlc2J1aWxkOntcclxuICAgIHB1cmU6Wydjb25zb2xlLmxvZyddLFxyXG4gICAgZHJvcDpbJ2RlYnVnZ2VyJ10sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtBbnREZXNpZ25WdWVSZXNvbHZlcih7IGltcG9ydFN0eWxlOiBmYWxzZSB9KV1cclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAdXNlIFwiQC9zdHlsZXMvcm9vdC5zY3NzXCIgYXMgKjsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy9cdTRFRTNcdTc0MDZcdThCQkVcdTdGNkVcclxuICAgIHByb3h5OiB7XHJcbiAgICAgIC8vXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHJcbiAgICAgICcvZGV2Jzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9kZXYvLCAnJylcclxuICAgICAgfSxcclxuICAgICAgLy9cdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcclxuICAgICAgJy9wcm9kJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjAuMjYuMTYxLjM2Ojg4OTkvJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3Byb2QvLCAnJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYnVpbGQ6e1xyXG4gICAgbWluaWZ5Oidlc2J1aWxkJyxcclxuICAgIHJvbGx1cE9wdGlvbnM6e1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbmFtZS50b1N0cmluZygpLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXS5zcGxpdChcIi9cIilbMF0udG9TdHJpbmcoKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVQLFNBQVMsZUFBZSxXQUFXO0FBQzFSLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUprSCxJQUFNLDJDQUEyQztBQU14TSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFRO0FBQUEsSUFDTixNQUFLLENBQUMsYUFBYTtBQUFBLElBQ25CLE1BQUssQ0FBQyxVQUFVO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLE1BQU0sQ0FBQyxDQUFDO0FBQUEsSUFDMUQsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQTtBQUFBLE1BRUwsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzlDO0FBQUE7QUFBQSxNQUVBLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxXQUFXLEVBQUU7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFNO0FBQUEsSUFDSixRQUFPO0FBQUEsSUFDUCxlQUFjO0FBQUEsTUFDVixRQUFRO0FBQUEsUUFDTixhQUFhLE1BQU07QUFDakIsY0FBSSxLQUFLLFNBQVMsY0FBYyxHQUFHO0FBQ2pDLG1CQUFPLEtBQUssU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLFVBQzFFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
