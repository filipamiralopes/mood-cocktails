import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      <Link to={"/"}>
          <img src={logo}  alt="Logo" className='navbar-logo'/> 
      </Link>

      <h1>Mood Cocktail Bar</h1>    

     {currentUser && <span>Welcome, {currentUser.username}!</span>}
    </div>
  )
}

export default Navbar