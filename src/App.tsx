import { Button } from "./components/Button/button";
import "./App.css";
import { Box, HStack, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginLeft="4"
      gap="4"
      marginTop="5"
    >
      <h1>Chakra UI</h1>
      <HStack wrap="wrap" gap="6">
        <Heading>Based on visual :</Heading>
        <Button visual="solid">Solid</Button>
        <Button visual="subtle">Subtle</Button>
        <Button visual="surface">Surface</Button>
        <Button visual="outline">Outline</Button>
        <Button visual="ghost">Ghost</Button>
        <Button visual="plain">Plain</Button>
      </HStack>

      <HStack wrap="wrap" gap="6">
        <Heading>Based on size :</Heading>
        <Button visual="solid" size="sm">
          Solid
        </Button>
        <Button visual="subtle" size="md">
          Subtle
        </Button>
        <Button visual="surface" size="lg">
          Surface
        </Button>
      </HStack>
    </Box>
  );
}

export default App;
