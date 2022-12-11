import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createPages from "vite-plugin-pages";
//import { chunkSplitPlugin } from "vite-plugin-chunk-split";
//import createPages from "../vite-plugin-pages/src";
//import { chunkSplitPlugin } from "../vite-plugin-chunk-split/src";

// https://vitejs.dev/config/
export default defineConfig({
  base: "react-rest-client",
  resolve: {
    alias: {
      _: path.resolve(__dirname, "./src/_"),
    },
  },
  build: {
    minify: false,
  },
  plugins: [
    react(),
    // chunkSplitPlugin({
    //   customChunk: (args) => {
    //     let { file = "" } = args;
    //     if (file.startsWith("src/pages/")) {
    //       file = file.substring(4);
    //       file = file.replace(/\.[^.$]+$/, "");
    //       return file;
    //     } else if (/virtual:generated-pages-react/.test(file)) {
    //       return "routes";
    //     } else if (/react-dom|react|scheduler/.test(file)) {
    //       return "vendor/react";
    //     } else if (/react-router-dom|react-router|@remix-run/.test(file)) {
    //       return "vendor/router";
    //     } else if (/commonjsHelpers|vite\/preload-helper/.test(file)) {
    //       return "vendor/helper";
    //     } else {
    //       // console.log(">>>>", file);
    //     }
    //     return null;
    //   },
    // }),
    createPages({
      routeStyle: "remix",
      //syncIndex: false,
      importMode: () => "sync",
      resolver: "react",
    }),
  ],
});
