import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "react-rest-client",
  resolve: {
    alias: {
      main: path.resolve(__dirname, "./src/main"),
      _: path.resolve(__dirname, "./src/_"),
    },
  },
  plugins: [react()],
});
