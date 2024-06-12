import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency'; 
import produtoService from './../../services/produtoService'; 
import './../../styles/Produtos/ProdutoDetails.css'; 

const ProdutoDetails = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Usando o produtoService para obter os dados do produto
    const produtoId = parseInt(id);
    const produtoEncontrado = produtoService.getProdutoById(produtoId);
    setProduto(produtoEncontrado);
  }, [id]);

  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="produto-details">
      <h4>Detalhes do Produto</h4>
      <hr />
      <dl className="row">
        <dt className="col-sm-2">Descrição</dt>
        <dd className="col-sm-10">{produto.descricao}</dd>
        
        <dt className="col-sm-2">Valor</dt>
        <dd className="col-sm-10">{formatCurrency(produto.valor)}</dd>
      </dl>
      <div>
        <Link to={`/produtos/${produto.id}/editar`} className="btn btn-warning btn-md btn-spacing" title="Alterar">
            <i className="fas fa-edit"></i>
        </Link>
        
        <Link to="/produtos" className="btn btn-primary btn-md" title="Voltar">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProdutoDetails;
