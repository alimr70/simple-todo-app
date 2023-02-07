import { ReactElement, useEffect } from "react"
import { useAppSelector } from "../hooks/reduxHooks"

type PropsType = {
  children: ReactElement
}

const RtlProvider = ({ children }: PropsType) => {
  const { dir, lang } = useAppSelector((state) => state.lang)

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('lang', lang)
    document.getElementsByTagName('html')[0].setAttribute('dir', dir)
  }, [dir])

  return <>{children}</>
}
export default RtlProvider