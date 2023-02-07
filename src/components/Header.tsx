import { Box, Divider, Flex, Heading } from "@chakra-ui/react"
import { useAppSelector } from "../hooks/reduxHooks"
import RtlToggle from "./RtlToggle"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const { lang } = useAppSelector((state) => state.lang)
  return (
    <Box>
      <Flex direction='row' align='center'>
        <ThemeToggle />
        <Heading fontSize='xl' mx='auto'>{lang === 'en' ? 'Simple Todo App' : 'تطبيق إدارة مهام بسيط'}</Heading>
        <RtlToggle />
      </Flex>
      <Divider orientation='horizontal' my={3} />
    </Box>
  )
}
export default Header