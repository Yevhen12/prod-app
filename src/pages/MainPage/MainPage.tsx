import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MainPage = () => {
  return (
    <div>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default MainPage