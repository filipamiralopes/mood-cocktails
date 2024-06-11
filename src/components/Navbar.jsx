import logo from '../image/logo.png'
import menu from '../image/menu-icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={menu} alt="Menu" className='navbar-menu'/>
      <h3>Cocktail Bar</h3>
      <img src={logo}  alt="Logo" className='navbar-logo'/>
    </div>
  )
}

export default Navbar