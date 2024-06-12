import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency';
import compraService from './../../services/compraService';
import './../../styles/Compras/CompraDetails.css';

const CompraDetails = () => {
  const { id } = useParams();
  const [compra, setCompra] = useState(null);

  useEffect(() => {
    const compraId = parseInt(id);
    const compraEncontrada = compraService.getCompraById(compraId);
    setCompra(compraEncontrada);
  }, [id]);

  if (!compra) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="compra-details">
      <h4>Detalhes da Compra</h4>
      <hr />
      <dl className="row">
        <dt className="col-sm-2">Fornecedor</dt>
        <dd className="col-sm-10">{compra.fornecedor}</dd>
        
        <dt className="col-sm-2">Produto</dt>
        <dd className="col-sm-10">{compra.produto}</dd>

        <dt className="col-sm-2">Data da Compra</dt>
        <dd className="col-sm-10">{compra.dataCompra}</dd>

        <dt className="col-sm-2">Forma de Pagamento</dt>
        <dd className="col-sm-10">{compra.formaPagamento}</dd>

        <dt className="col-sm-2">Valor Unitário</dt>
        <dd className="col-sm-10">{formatCurrency(compra.valorUnitario)}</dd>

        <dt className="col-sm-2">Quantidade</dt>
        <dd className="col-sm-10">{compra.quantidade}</dd>

        <dt className="col-sm-2">Valor Total</dt>
        <dd className="col-sm-10">{formatCurrency(compra.valorCompra)}</dd>
      </dl>
      <div>
        <Link to={`/compras/${compra.id}/editar`} className="btn btn-warning btn-md btn-spacing" title="Alterar">
          <i className="fas fa-edit"></i>
        </Link>
        
        <Link to="/compras" className="btn btn-primary btn-md" title="Voltar">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default CompraDetails;
