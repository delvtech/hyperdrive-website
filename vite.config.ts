import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let basePath = process.env.BASE_PATH;
  if (!basePath) {
    const env = loadEnv(mode, process.cwd(), "");
    basePath = env.BASE_PATH;
  }
  return {
    plugins: [react(), tsconfigPaths()],
    envDir: ".",
    base: basePath ?? "/",
  };
});
