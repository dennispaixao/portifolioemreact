import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom'


const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
    <button onClick={toggleMenu}></button>
      <ul className={isOpen ? 'open' : ''}>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/sobre">Sobre mim</Link></li>
        <li><Link className='link'to="/habilidades">Habilidades</Link></li>
        <li><Link className='link' to="/portifolio">Portifólio</Link></li>
        <li><Link className='link' to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;