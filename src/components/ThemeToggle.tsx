import { Box, Button, Divider, useColorMode } from "@chakra-ui/react"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'dark' ? 'light' : 'dark'}
        </Button>
      </header>
      <Divider orientation='horizontal' my={3} />
    </Box>
  )
}
export default ThemeToggle