import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img
        className="header__logo"
        src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png"
        alt="amazon logo"
      />
      <div className="header__search">
        <input
          className="header__searchInput" 
          type="text"
        />
        
        </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">
            hello guest 
          </span>
          <span className="header__optionLine2">
            sign in 
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">
            return
          </span>
          <span className="header__optionLine2">
            order
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">
            your
          </span>
          <span className="header__optionLine2">
            prime
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
