import React from 'react';
import { Link } from 'react-router-dom';

const ProdutoItem = ({ produto, onDelete }) => {
  return (
    <tr>
      <td>{produto.descricao}</td>
      <td>{produto.valor}</td>
      <td className="botoes-alinhados">
        <Link to={`/edit/${produto.id}`} className="btn btn-warning btn-sm" title="Alterar">
          <i className="fas fa-edit"></i>
        </Link>
        <Link to={`/details/${produto.id}`} className="btn btn-info btn-sm" title="Detalhes">
          <i className="fas fa-eye"></i>
        </Link>
        <button onClick={() => onDelete(produto.id)} className="btn btn-danger btn-sm" title="Excluir">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default ProdutoItem;
