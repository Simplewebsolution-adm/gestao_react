import React from 'react';
import { Link } from 'react-router-dom';

const CompraItem = ({ compra, onDelete }) => {
  return (
    <tr>
      <td>{compra.fornecedor}</td>
      <td>{compra.produto}</td>
      <td>{compra.dataCompra}</td>
      <td>{compra.formaPagamento}</td>
      <td>{compra.valorUnitario}</td>
      <td>{compra.quantidade}</td>
      <td>{compra.valorCompra}</td>
      <td className="botoes-alinhados">
        <Link to={`/compras/edit/${compra.id}`} className="btn btn-warning btn-sm" title="Alterar">
          <i className="fas fa-edit"></i>
        </Link>
        <Link to={`/compras/details/${compra.id}`} className="btn btn-info btn-sm" title="Detalhes">
          <i className="fas fa-eye"></i>
        </Link>
        <button onClick={() => onDelete(compra.id)} className="btn btn-danger btn-sm" title="Excluir">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default CompraItem;
