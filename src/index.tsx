// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'shared/config/i18n/i18n'

// document.body.style.backgroundColor = 'red';
render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider >
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)
