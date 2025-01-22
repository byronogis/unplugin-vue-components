"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCO54XYVQcjs = require('./chunk-CO54XYVQ.cjs');
require('./chunk-3NAFQ3SJ.cjs');
require('./chunk-OBGZSXTJ.cjs');
require('./chunk-ZBPRDZS4.cjs');

// src/nuxt.ts
var _kit = require('@nuxt/kit');
var nuxt_default = _kit.defineNuxtModule.call(void 0, {
  setup(options) {
    _kit.addWebpackPlugin.call(void 0, _chunkCO54XYVQcjs.unplugin_default.webpack(options));
    _kit.addVitePlugin.call(void 0, _chunkCO54XYVQcjs.unplugin_default.vite(options));
  }
});


exports.default = nuxt_default;
