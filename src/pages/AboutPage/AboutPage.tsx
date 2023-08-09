import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../../components/Counter'

type Props = {}

const AboutPage = () => {
  return (
    <div>
      <p>Good Jib!</p>
      <Counter />
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default AboutPage