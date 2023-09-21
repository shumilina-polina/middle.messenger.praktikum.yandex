import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const partialDirectory = [
  resolve(root, "components"),
  resolve(root, "pages", "login", "components"),
];

export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory,
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        register: resolve(root, "pages", "register", "index.html"),
      },
    },
  },
});
