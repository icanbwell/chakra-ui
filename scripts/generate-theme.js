import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { defineConfig } from "@chakra-ui/react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to tokens.json
const tokensPath = path.resolve(__dirname, "../tokens.json");
const raw = fs.readFileSync(tokensPath, "utf-8");
const tokens = JSON.parse(raw);

const global = tokens.global || {};

const themeConfig = defineConfig({
  preflight: false,
  strictTokens: true,
  theme: {
    tokens: {
      colors: Object.entries(global.colors || {}).reduce(
        (acc, [key, value]) => {
          acc[key] = { value: value.value };
          return acc;
        },
        {}
      ),
      fonts: Object.entries(global.fonts || {}).reduce((acc, [key, value]) => {
        acc[key] = { value: value.value };
        return acc;
      }, {}),
    },
  },
});

const output = `
import { createSystem, defaultConfig } from "@chakra-ui/react"

const config = ${JSON.stringify(themeConfig, null, 2)}

export const system = createSystem(defaultConfig, config)
`;

fs.writeFileSync(path.resolve(__dirname, "../src/theme.ts"), output);
console.log("✅ theme.ts generated from tokens.json");
