import React from 'react';

const Header = () => {
  const NAV = ['About Us', 'Contact Us'];
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {NAV.map(item => (
            <li>
              <a href='#'>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
