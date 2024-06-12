import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency';
import { formatDate } from './../../utils/formatData';
import vendaService from './../../services/vendaService';
import clienteService from './../../services/clienteService';
import produtoService from './../../services/produtoService';
import './../../styles/Vendas/VendaDetails.css'; 

const VendaDetails = () => {
  const { id } = useParams();
  const [venda, setVenda] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const vendaData = await vendaService.getVendaById(id);
      setVenda(vendaData);

      const clienteData = await clienteService.getClienteById(vendaData.clienteId);
      setCliente(clienteData);

      const produtoData = await produtoService.getProdutoById(vendaData.produtoId);
      setProduto(produtoData);
    };

    fetchData();
  }, [id]);

  if (!venda) {
    return <div>Carregando detalhes da venda...</div>;
  }

  return (
    <div className="venda-details">
      <h4>Detalhes da Venda</h4>
      <hr />
      <dl className="row">
        <dt className="col-sm-2">Cliente</dt>
        <dd className="col-sm-10">{cliente?.nome}</dd>
        <dt className="col-sm-2">Produto</dt>
        <dd className="col-sm-10">{produto?.descricao}</dd>
        <dt className="col-sm-2">Data da Venda</dt>
        <dd className="col-sm-10">{formatDate(venda.dataVenda)}</dd>
        <dt className="col-sm-2">Forma de Pagamento</dt>
        <dd className="col-sm-10">{venda.formaPagamento}</dd>
        <dt className="col-sm-2">Quantidade</dt>
        <dd className="col-sm-10">{venda.quantidade}</dd>
        <dt className="col-sm-2">Valor da Venda</dt>
        <dd className="col-sm-10 valor-col">{formatCurrency(venda.valorVenda)}</dd>
      </dl>
      <div>
        <Link to={`/vendas/${venda.id}/editar`} className="btn btn-warning btn-md btn-spacing" title="Alterar">
            <i className="fas fa-edit"></i>
        </Link>
        
        <Link to="/vendas" className="btn btn-primary btn-md" title="Voltar">
            <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default VendaDetails;
