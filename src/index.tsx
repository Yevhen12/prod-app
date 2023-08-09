import { render } from 'react-dom'
import App from './App'
import ThemeProvider from './theme/ThemeProvider'

// document.body.style.backgroundColor = 'red';
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)



console.log('HELLLLO')