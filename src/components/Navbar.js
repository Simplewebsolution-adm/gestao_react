import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/vendas">Vendas</Link></li>
        <li><Link to="/compras">Compras</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
