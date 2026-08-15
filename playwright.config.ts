import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";

const nixProfileChrome = `${process.env.HOME}/.nix-profile/bin/google-chrome`;
const systemChrome = existsSync(nixProfileChrome) ? nixProfileChrome : undefined;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173",
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ?? systemChrome,
    },
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1",
    url: "http://localhost:5173",
    reuseExistingServer: true,
  },
});
