import logo from '../image/logo.png'
import menu from '../image/menu-icon.png'

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      <img src={menu} alt="Menu" className='navbar-menu'/>
      <h3>Mood Cocktail Bar</h3>
      <img src={logo}  alt="Logo" className='navbar-logo'/>
      {currentUser && <span>Welcome, {currentUser.username}!</span>}
    </div>
  )
}

export default Navbar