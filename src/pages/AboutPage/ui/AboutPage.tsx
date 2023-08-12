import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <p>Good Jib!</p>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default AboutPage