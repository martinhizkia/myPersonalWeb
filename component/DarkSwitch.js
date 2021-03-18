import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <Button
      leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      variant="solid"
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    >
      {colorMode === "dark" ? "Light" : "Dark"}
    </Button>
  );
};

export default DarkSwitch;
