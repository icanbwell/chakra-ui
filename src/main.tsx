import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { system } from "./theme.ts";

import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
