import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"
import { Tooltip } from '@chakra-ui/react'
import { useAppSelector } from "../hooks/reduxHooks"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const lang = useAppSelector(state => state.lang.lang)
  return (
    <Tooltip
      label={
        lang === "en"
          ? colorMode === 'dark' ? "Light Mode" : "Dark mode"
          : colorMode === 'dark' ? "الوضع المضيئ" : "الوضع المعتم"
      }
    >
      <IconButton
        aria-label={colorMode === 'dark' ? "Toggle light" : "Toggle dark"}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  )
}
export default ThemeToggle