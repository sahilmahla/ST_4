import React, { useRef,  useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

export function Navbar() {
  const navbar = useRef(null);
  const toogleNavbar = () => {
    navbar.current.classList.toggle('hide');
  };

  useEffect(() => {
    if (isMobile) {
      navbar.current.classList.add('hide');
    }
  }, []);

  return (
    <nav>
      <div
        role='button'
        className='menu-btn'
        onClick={toogleNavbar}
      >
        <img src="https://img.icons8.com/ios-glyphs/60/000000/menu--v1.png"  alt="open menu"/>
      </div>
      <div
        className='menu-links'
        ref={navbar}
      >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/passing-thoughts'>Passing Thoughts</NavLink>
        <NavLink to='/tic-tac-toe'>Tic Tac Toe</NavLink>
      </div>
    </nav>
  );
}
