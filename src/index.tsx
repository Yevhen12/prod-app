// eslint-disable-next-line react/no-deprecated
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'
import '@/shared/config/i18n/i18n'

// document.body.style.backgroundColor = 'red';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
if (!container) {
  throw new Error('Root not found')
}
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter>
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider >
    </ErrorBoundary>
  </StoreProvider>
</BrowserRouter>)
