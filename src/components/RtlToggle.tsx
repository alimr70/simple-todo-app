import { Button, Tooltip } from "@chakra-ui/react"
import { toggleRtl } from "../features/lang/langSlice"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"

const RtlToggle = () => {
  const dispatch = useAppDispatch()
  const lang = useAppSelector(state => state.lang.lang)
  return (
    <Tooltip label={lang === "en" ? 'تحويل للعربية' : 'Change To English'}>
      <Button onClick={() => dispatch(toggleRtl())}>{lang === 'en' ? 'ع' : 'En'}</Button>
    </Tooltip>
  )
}
export default RtlToggle