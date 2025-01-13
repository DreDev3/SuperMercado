import React, { useState } from 'react';
import { FaStore } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { HeaderGlobal, SubMenu, MenuItem } from './styled';
import { HashLink } from 'react-router-hash-link';
import { useCart } from '../../services/CartContext';

export default function Header() {
  const location = useLocation();
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const { totalItems } = useCart();
  console.log(totalItems);

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };


  const generateLink = id => {
    if (location.pathname === '/setores') {
      return `#${id}`;
    }
    return `/setores#${id}`;
  };

  return (
    <HeaderGlobal>
      <div id="logo" className="logo">Supermercado <br /><span>Hort-Fruit</span></div>
      <div className="carrinho">
        <Link to='/carrinho'>
          <div className="notify">{totalItems}</div>
          <FaStore color='#fff' size={24} />
        </Link>
      </div>
      <nav>
        <ul className='menu'>
          <li><Link to="/" class="home">Início</Link></li>
          <MenuItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/setores" className="sector">Setores</Link>
            <SubMenu className={isSubMenuVisible ? 'active' : ''}>
              <li><HashLink to={generateLink('hort-fruit')}>Hort-Fruit</HashLink></li>
              <li><HashLink to={generateLink('sacaria')}>Sacaria</HashLink></li>
              <li><HashLink to={generateLink('orientais')}>Orientais</HashLink></li>
              <li><HashLink to={generateLink('massas')}>Massas</HashLink></li>
              <li><HashLink to={generateLink('molhos')}>Molhos</HashLink></li>
              <li><HashLink to={generateLink('higiene')}>Higiene</HashLink></li>
              <li><HashLink to={generateLink('perfumaria')}>Perfumaria</HashLink></li>
              <li><HashLink to={generateLink('limpeza-casa')}>Limpeza Casa</HashLink></li>
            </SubMenu>
          </MenuItem>
          {/*           <li><Link to="/receitas" class="recipe">Receitas</Link></li>
 */}          <li><Link to="/nossas-lojas" class="store">Nossas Lojas</Link></li>
          <li><Link to="/contato" class="contact">Contatos</Link></li>
        </ul>
      </nav>
    </HeaderGlobal>
  );
}
