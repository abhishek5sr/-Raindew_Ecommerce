import "../styling/Footer.css";
import logo2 from "../assets/logo2.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo2} alt="Raindew Logo" />
          <p>
            Your trusted family shopping center for quality products at great
            prices.
          </p>
          <div className="footer-social">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
            <FiYoutube />
            <FiMail />
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Products</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li>My Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Help &amp; Support</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Raindew Family Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
