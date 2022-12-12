import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createPages from "vite-plugin-pages";
//import { chunkSplitPlugin } from "vite-plugin-chunk-split";
//import createPages from "../vite-plugin-pages/src";
import { chunkSplitPlugin } from "../vite-plugin-chunk-split/src";

// https://vitejs.dev/config/
export default defineConfig({
  //base: "react-rest-client",
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
    chunkSplitPlugin({
      customChunk: (args) => {
        let { file = "" } = args;
        if (file.startsWith("src/pages/")) {
          file = file.replace(/_part.*/, "part");
          //file = file.replace(/part\.|\.part|part\//, "part");
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, "");
          return file;
        } else if (/commonjsHelpers|vite\/preload-helper/.test(file)) {
          return "vendor/helper";
        } else if (file.startsWith("node_modules/")) {
          file = file.replace("@", "");
          file = file.replace("-", "/");
          file = file.replace(
            /restart|scheduler|remix|prop|popperjs|classnames/,
            "react"
          );
          file = file.replace(
            /babel|dom|uncontrollable|invariant|dequal|warning/,
            "core"
          );
          file = file.split("/");
          // return `vendor/${file[1]}-${file[2]}`;
          return `vendor/${file[1]}`;
        } else {
          console.log(">>>>", file);
        }
        return null;
      },
    }),
    createPages({
      routeStyle: "remix",
      //syncIndex: false,
      //importMode: () => "sync",
      resolver: "react",
      exclude: ["_part"],
    }),
  ],
});
