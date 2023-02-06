import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label={colorMode === 'dark' ? "Toggle light" : "Toggle dark"}
      icon={colorMode === 'dark' ? <SunIcon color="yellow.400" /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  )
}
export default ThemeToggle