import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import clienteService from './../../services/clienteService'; // Importe o clienteService
import './../../styles/Clientes/ClienteDetails.css'; // Importe o arquivo CSS

const ClienteDetails = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);

//   useEffect(() => {
//     // Simulando a busca de dados do cliente
//     // Em uma aplicação real, você faria uma requisição a uma API para buscar os dados do cliente
//     const fetchCliente = async () => {
//       const response = await fetch(`/api/clientes/${id}`); // Substitua pela sua URL de API real
//       const data = await response.json();
//       setCliente(data);
//     };
    
//     fetchCliente();
//   }, [id]);

  useEffect(() => {
    // Usando o clienteService para obter os dados do cliente
    const clienteId = parseInt(id);
    const clienteEncontrado = clienteService.getClienteById(clienteId);
    setCliente(clienteEncontrado);
  }, [id]);

  if (!cliente) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="cliente-details">
      <h4>Detalhes do Cliente</h4>
      <hr />
      <dl className="row">
        <dt className="col-sm-2">Nome</dt>
        <dd className="col-sm-10">{cliente.nome}</dd>
        
        <dt className="col-sm-2">CPF</dt>
        <dd className="col-sm-10">{cliente.cpf}</dd>
        
        <dt className="col-sm-2">Endereço</dt>
        <dd className="col-sm-10">{cliente.endereco}</dd>
        
        <dt className="col-sm-2">Telefone</dt>
        <dd className="col-sm-10">{cliente.telefone}</dd>
        
        <dt className="col-sm-2">Data de Nascimento</dt>
        <dd className="col-sm-10">{cliente.dataNasc}</dd>
        
        <dt className="col-sm-2">Email</dt>
        <dd className="col-sm-10">{cliente.email}</dd>
      </dl>
      <div>
        <Link to={`/clientes/${cliente.id}/editar`} className="btn btn-warning btn-md btn-spacing" title="Alterar">
            <i className="fas fa-edit"></i>
        </Link>
        
        <Link to="/clientes" className="btn btn-primary btn-md" title="Voltar">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default ClienteDetails;
