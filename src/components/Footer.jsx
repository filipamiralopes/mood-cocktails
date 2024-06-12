import logo from '../image/logo.png'
import follow from '../image/follow-us.png'
import hour from '../image/opening-hours.png'

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
        <p>Facebook: <a href="https://facebook.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">Mood Cocktail Bar</a></p>
        <p>Twitter: <a href="https://twitter.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">@MoodCocktailBar</a></p>
        <p>Instagram: <a href="https://instagram.com/moodcocktailbar" target="_blank" rel="noopener noreferrer">@MoodCocktailBar</a></p>
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