// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'

// document.body.style.backgroundColor = 'red';
render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  ,
  document.getElementById('root')
)
