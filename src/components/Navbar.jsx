import logo from '../image/logo.png'
import menu from '../image/menu-icon.png'

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      <img src={menu} alt="Menu" className='navbar-menu'/>
      <h3>Mood Cocktails Bar</h3>
      <img src={logo} alt="Logo" className='navbar-logo'/>
      {currentUser && (
        <div className='navbar-user-info'>
          {currentUser.photo && (
            <img 
              src={currentUser.photo} 
              alt="User" 
              className='navbar-user-photo'
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
            />
          )}
          <span>Welcome, {currentUser.username}!</span>
        </div>
      )}
    </div>
  );
};
export default Navbar