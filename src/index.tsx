import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

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