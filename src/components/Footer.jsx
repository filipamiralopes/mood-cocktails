import logo from '../image/logo.png'
import follow from '../image/follow-us.png'
import hour from '../image/opening-hours.png'
import facebook from '../image/facebook.png'
import twitter from '../image/twitter.png'
import instagram from '../image/instagram.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-detail">
        <h2>Contact Us <span><img src={logo}  alt="Logo" className='footer-logo'/></span></h2>
        <p>Address: 123 Cocktail Lane, Bevarage City, BC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@moodcocktailbar.com</p>
      </div>
      <div className="footer-detail">
        <h2>Follow Us <span><img src={follow}  alt="Follow" className='footer-logo'/></span></h2>
        <p>
          <a href="https://facebook.com/moodcocktailbar"><img src={facebook} alt="Facebook Logo" className='footer-logo'/></a> 
          <a href="https://facebook.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">Mood Cocktail Bar</a>
        </p>
        <p>
          <a href="https://twitter.com/moodcocktailbar"><img src={twitter} alt="Twitter Logo" className='footer-logo'/></a>
          <a href="https://twitter.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">@MoodCocktailBar</a>
        </p>
        <p>
          <a href="https://instagram.com/moodcocktailbar"><img src={instagram} alt="Instagram Logo" className='footer-logo'/></a>
          <a href="https://instagram.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">@MoodCocktailBar</a>
        </p>
      </div>
      <div className="footer-detail">
        <h2>Opening Hour <span><img src={hour}  alt="Hour" className='footer-logo'/></span></h2>
        <p>Monday - Thursday: 5 PM - 11 PM</p>
        <p>Friday, Saturday & Sunday: 3 PM - 2 AM</p>
      </div>
    </div>
  )
}

export default Footer