import { Button } from "@chakra-ui/react"
import { toggleRtl } from "../features/lang/langSlice"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"

const RtlToggle = () => {
  const dispatch = useAppDispatch()
  const { lang } = useAppSelector((state) => state.lang)
  return (
    <Button onClick={() => dispatch(toggleRtl())}>{lang === 'en' ? 'ع' : 'E'}</Button>
  )
}
export default RtlToggle