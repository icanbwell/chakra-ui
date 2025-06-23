# Chakra UI: Generate Theme from tokens.json

This guide explains how to use a custom script to generate a Chakra UI theme from a `tokens.json` file, enabling token-driven theming in a scalable design system setup.

---

## 🧾 Overview

We will use a Node.js script (`generate-theme.js`) to convert a design tokens JSON file (exported from Figma Tokens plugin or custom source) into a usable Chakra UI `theme.ts`.

### 📁 File Structure

```
libs/
├── chakra-ui/
│   ├── scripts/
│   │   └── generate-theme.js
│   └── theme/
│       └── index.ts (generated)
tokens.json
```

---

## 🧰 Prerequisites

Install required packages:

```bash
npm install ts-node fs path
```

---

## 🔧 Step 1: tokens.json Format

```json
{
  "themes": {
    "default": {
      "colors": {
        "primary": "#FF0000",
        "background": "#F0F0F0"
      },
      "fontSize": {
        "sm": "12px",
        "md": "16px",
        "lg": "24px"
      },
      "fontFamily": {
        "heading": "'Inter', sans-serif",
        "body": "'Roboto', sans-serif"
      }
    }
  }
}
```

---

## 🔁 Step 2: Chakra Theme Generator Script

**File**: `libs/chakra-ui/scripts/generate-theme.js`

```ts
import fs from "fs";
import path from "path";

const tokens = JSON.parse(fs.readFileSync("tokens.json", "utf8"));
const theme = tokens.themes.default;

const chakraTheme = {
  colors: theme.colors || {},
  fontSizes: theme.fontSize || {},
  fonts: theme.fontFamily || {},
};

const outputPath = path.join(__dirname, "../theme/index.ts");

const fileContent = `
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme(${JSON.stringify(chakraTheme, null, 2)});
`;

fs.writeFileSync(outputPath, fileContent);
console.log("✅ Chakra theme generated at libs/chakra-ui/theme/index.ts");
```

---

## 📦 Step 3: Add NPM Script

**package.json**:

```json
{
  "scripts": {
    "generate:chakra": "ts-node libs/chakra-ui/scripts/generate-theme.js"
  }
}
```

Now run:

```bash
npm run generate:chakra
```

This creates `libs/chakra-ui/theme/index.ts` containing the Chakra-compatible theme.

---

## 🧪 Step 4: Use in ChakraProvider

```tsx
// main.tsx or App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "libs/chakra-ui/theme";

<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>;
```

---

## ✅ Benefits

- Token-driven Chakra theme
- Easy integration with Figma Tokens
- Automates conversion & prevents manual errors

---
