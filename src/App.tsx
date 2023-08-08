import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'
import { store } from './store'
import Header from './components/Header'
import { theme } from '../theme'

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Header />
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
