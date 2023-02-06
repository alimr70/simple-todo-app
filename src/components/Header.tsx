import { Box, Divider, Flex, Heading } from "@chakra-ui/react"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <Box>
      <Flex direction='row' align='center'>
        <ThemeToggle />
        <Heading fontSize='xl' mx='auto'>Simple Todo App</Heading>
      </Flex>
      <Divider orientation='horizontal' my={3} />
    </Box>
  )
}
export default Header