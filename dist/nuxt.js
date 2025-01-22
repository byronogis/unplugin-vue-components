import {
  unplugin_default
} from "./chunk-WWUUA7Q7.js";
import "./chunk-QLWVHJBS.js";
import "./chunk-3RG5ZIWI.js";
import "./chunk-6F4PWJZI.js";

// src/nuxt.ts
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
var nuxt_default = defineNuxtModule({
  setup(options) {
    addWebpackPlugin(unplugin_default.webpack(options));
    addVitePlugin(unplugin_default.vite(options));
  }
});
export {
  nuxt_default as default
};
