import React from 'react';
import { Link } from 'react-router-dom';

const VendaItem = ({ venda, onDelete }) => {
  return (
    <tr>
      <td>{venda.produto.descricao}</td>
      <td>{venda.quantidade}</td>
      <td>{venda.valorVenda}</td>
      <td className="botoes-alinhados">
        <Link to={`/edit/${venda.id}`} className="btn btn-warning btn-sm" title="Alterar">
          <i className="fas fa-edit"></i>
        </Link>
        <Link to={`/details/${venda.id}`} className="btn btn-info btn-sm" title="Detalhes">
          <i className="fas fa-eye"></i>
        </Link>
        <button onClick={() => onDelete(venda.id)} className="btn btn-danger btn-sm" title="Excluir">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default VendaItem;
