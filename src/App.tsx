import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { AuthContextProvider } from './contexts/auth-context'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <HelmetProvider>
            <Helmet titleTemplate="%s | BNB Bank" />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </HelmetProvider>
        </AuthContextProvider>
      </QueryClientProvider>

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
