import { Button, useColorMode } from "@chakra-ui/react"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'dark' ? 'light' : 'dark'}
      </Button>
    </header>
  )
}
export default ThemeToggle