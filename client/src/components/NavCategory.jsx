import React, { useState } from 'react';
import  '../styling/NavMenu.css';

const NavCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example data based on your design
  const menuItems = [
    'Grocery & Essentials',
    'Fashion & Clothing',
    'Electronics & Gadgets',
    'Beauty & Personal Care',
    'Home & Kitchen',
    'Kids & Baby Products',
    'Sports & Fitness',
    'Footwear & Accessories'
  ];

  return (
    <div className="nav-container">
      <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        Categories {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavCategory;