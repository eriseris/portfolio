import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";

const githubPagesSpaFallback={
  name:"github-pages-spa-fallback",
  closeBundle(){copyFileSync("dist/index.html","dist/404.html")}
};

export default defineConfig({ plugins: [react(),githubPagesSpaFallback], base: "/" });
