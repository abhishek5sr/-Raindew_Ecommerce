import '../styling/NavBar.css';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="nav">
    
      <div className="navbar-logo">
        <img src={logo} alt="Raindew Logo" />
      </div>

      <div className="search-bar">
        <CiSearch />
        <input type="text" className="search-input" placeholder="Search for Products, Brands and More" />
        <BsGrid3X3Gap className="search-grid-icon" />
      </div>

     
      <div className="nav-links">
        <span>Products</span>
        <span>Categorys </span>
      </div>

 
      <div className="nav-location">
        <p><FaLocationDot />Location</p>
        <p style={{color:'#1E90FF'}}>Select delivery address</p>
      </div>
    </div>
  );
}

export default NavBar;
