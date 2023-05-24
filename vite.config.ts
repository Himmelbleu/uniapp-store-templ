import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import { shortcuts, rules } from "./unocss.config";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  base: "/uniapp-store-templ",
  // base: "/",
  plugins: [
    uni(),
    Unocss({
      rules,
      shortcuts,
      transformers: [
        transformerDirectives({
          applyVariable: ["--uno"]
        })
      ],
      presets: [presetAttributify({}), presetUno()]
    }),
    AutoImport({
      imports: ["vue"]
    }),
    Components({
      resolvers: [],
      dirs: ["./src/components/**"]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/scss/common.scss" as *;`
      }
    }
  }
});
