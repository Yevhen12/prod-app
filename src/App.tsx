import React, { Suspense, useContext } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Counter } from './components/Counter'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

import './styles/index.scss'


const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Counter />
      <button onClick={toggleTheme}>Toggke</button>
      <Suspense fallback={<p>Loading....</p>}>
        <BrowserRouter>
          <Routes>
            <Route path={'/about'} element={<AboutPageAsync />} />
            <Route path={'/'} element={<MainPageAsync />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App