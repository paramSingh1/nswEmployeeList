import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // so we don't need to import describe and it every time
    environment: "jsdom",
    setupFiles: "./setup-test.ts", // path to the config file
    coverage: {
      provider: "istanbul", // or 'c8',
      all: true,
    },
  },
});
