import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      <Link to={"/"}>
          <img src={logo}  alt="Logo" className='navbar-logo'/> 
      </Link>

      <h1>Mood Cocktails Bar</h1>    

      {/* {currentUser && <span style={{color: 'black', paddingRight: '20px'}}>Welcome, {currentUser.username}!</span>} */}

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
          <span style={{color: 'black', paddingRight: '20px'}}>Welcome, {currentUser.username}!</span>
        </div>
      )}
    </div>
  );
};
export default Navbar