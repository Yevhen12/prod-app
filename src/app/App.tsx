import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'


const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
     <AppRouter />
    </div>
  )
}

export default App