import "../styling/NavComponent.css";
import nav1 from "../assets/NavMenuImages/nav1.png";
import nav2 from "../assets/NavMenuImages/nav2.png";
import nav3 from "../assets/NavMenuImages/nav3.png";
import nav4 from "../assets/NavMenuImages/nav4.png";
import nav5 from "../assets/NavMenuImages/nav5.png";
import nav6 from "../assets/NavMenuImages/nav6.png";
import nav7 from "../assets/NavMenuImages/nav7.png";
import nav8 from "../assets/NavMenuImages/nav8.png";
import nav9 from "../assets/NavMenuImages/nav9.png";
import { FiShoppingCart, FiUser, FiMoreHorizontal } from "react-icons/fi";

const categories = [
  { src: nav1, label: "For you" },
  { src: nav2, label: "Grocery & Essentials" },
  { src: nav3, label: "Fashion & Clothing" },
  { src: nav4, label: "Electronics & Gadgets" },
  { src: nav5, label: "Beauty & Personal Care" },
  { src: nav6, label: "Home & Kitchen" },
  { src: nav7, label: "Kids & Baby Products" },
  { src: nav8, label: "Sports & Fitness" },
  { src: nav9, label: "Footwear & Accessories" },
];

function NavComponent() {
  return (
    <div className="nav-element">
      <div className="nav-element1">
        {categories.map(({ src, label }) => (
          <div key={label} className="nav-category-item">
            <img src={src} alt={label} />
            <p>{label}</p>
          </div>
        ))}
      </div>

      
      <div className="nav-element2">
        <span className="nav-auth-btn"><FiUser size={14} /> Login</span>
        <span className="nav-auth-btn"><FiMoreHorizontal size={14} /> More</span>
        <span className="nav-auth-btn nav-cart"><FiShoppingCart size={14} /> Cart</span>
      </div>
    </div>
  );
}

export default NavComponent;
