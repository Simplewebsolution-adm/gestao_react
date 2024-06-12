import React from 'react';
import { Link } from 'react-router-dom';

const ClienteItem = ({ cliente, onDelete }) => {
  return (
    <tr>
      <td>{cliente.nome}</td>
      <td>{cliente.email}</td>
      <td className="botoes-alinhados">
        <Link to={`/edit/${cliente.id}`} className="btn btn-warning btn-sm" title="Alterar">
          <i className="fas fa-edit"></i>
        </Link>
        <Link to={`/details/${cliente.id}`} className="btn btn-info btn-sm" title="Detalhes">
          <i className="fas fa-eye"></i>
        </Link>
        <button onClick={() => onDelete(cliente.id)} className="btn btn-danger btn-sm" title="Excluir">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default ClienteItem;
