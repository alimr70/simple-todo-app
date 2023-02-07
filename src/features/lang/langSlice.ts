import { createSlice } from "@reduxjs/toolkit"

type LangState = {
  lang: 'en' | 'ar'
  dir: 'ltr' | 'rtl'
}

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
if (!localStorage.getItem('dir')) localStorage.setItem('dir', 'ltr')
const lang = localStorage.getItem('lang') as 'en' | 'ar'

const dir = localStorage.getItem('dir') as 'ltr' | 'rtl'

const initialState: LangState = { lang, dir }

export const lagnSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleRtl: (state) => {
      const lang = state.lang === 'en' ? 'ar' : 'en'
      const dir = state.dir === 'ltr' ? 'rtl' : 'ltr'
      localStorage.setItem('lang', lang)
      localStorage.setItem('dir', dir)
      return { lang, dir }
    }
  }
})

export const { toggleRtl } = lagnSlice.actions

export default lagnSlice.reducer