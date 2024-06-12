import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Atualize o caminho conforme necessário
import ClienteList from './components/Clientes/ClienteList';
import ClienteForm from './components/Clientes/ClienteForm';
import ClienteDetails from './components/Clientes/ClienteDetails';

import ProdutoList from './components/Produtos/ProdutoList';
import ProdutoForm from './components/Produtos/ProdutoForm';
import ProdutoDetails from './components/Produtos/ProdutoDetails';

import CompraList from './components/Compras/CompraList';
import CompraForm from './components/Compras/CompraForm';
import CompraDetails from './components/Compras/CompraDetails';

import VendaList from './components/Vendas/VendaList';
import VendaForm from './components/Vendas/VendaForm';
import VendaDetails from './components/Vendas/VendaDetails';

import './App.css'; // Certifique-se de ter um arquivo CSS para estilos gerais

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <div className="container">
        <Routes>
          <Route path="/clientes" element={<ClienteList />} />
          <Route path="/clientes/novo" element={<ClienteForm />} />
          <Route path="/clientes/:id/editar" element={<ClienteForm />} />
          <Route path="/clientes/details/:id" element={<ClienteDetails />} />

          <Route path="/produtos" element={<ProdutoList />} />
          <Route path="/produtos/novo" element={<ProdutoForm />} />
          <Route path="/produtos/:id/editar" element={<ProdutoForm />} />
          <Route path="/produtos/details/:id" element={<ProdutoDetails />} />

          <Route path="/compras" element={<CompraList />} />
          <Route path="/compras/novo" element={<CompraForm />} />
          <Route path="/compras/:id/editar" element={<CompraForm />} />
          <Route path="/compras/details/:id" element={<CompraDetails />} />

          <Route path="/vendas" element={<VendaList />} />
          <Route path="/vendas/novo" element={<VendaForm />} />
          <Route path="/vendas/:id/editar" element={<VendaForm />} />
          <Route path="/vendas/details/:id" element={<VendaDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
