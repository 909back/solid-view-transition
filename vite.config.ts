import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import path from "path";

export default defineConfig({
  plugins: [solidStart(), nitro({ preset: "cloudflare-pages" })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
