import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  define: {
    "import.meta.env.PUBLIC_R2_URL": JSON.stringify("https://test.r2.dev"),
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
