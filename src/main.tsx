import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'
import RtlProvider from './components/RtlProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RtlProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </RtlProvider>
    </Provider>
  </React.StrictMode>,
)
