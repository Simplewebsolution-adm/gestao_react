import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'; 
import { formatCurrency } from './../../utils/formatCurrency'; 
import produtoService from './../../services/produtoService';
import './../../styles/Produtos/ProdutoForm.css';

const ProdutoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    descricao: '',
    valor: 0
  });
  const [valorFormatado, setValorFormatado] = useState('R$ 0,00');

  useEffect(() => {
    if (id) {
      const produtoId = parseInt(id);
      const produtoEncontrado = produtoService.getProdutoById(produtoId);
      setProduto(produtoEncontrado);
      setValorFormatado(formatCurrency(produtoEncontrado.valor));
    } else {
      setValorFormatado(formatCurrency(0)); 
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'valor') {
      const valorNumerico = value.replace(/\D/g, '');
      const valorFormatado = formatCurrency(Number(valorNumerico) / 100);
      setProduto({
        ...produto,
        [name]: Number(valorNumerico) / 100
      });
      setValorFormatado(valorFormatado);
    } else if (name === 'descricao') {
      setProduto({
        ...produto,
        [name]: value.toUpperCase()
      });
    } else {
      setProduto({
        ...produto,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      produtoService.updateProduto(produto);
    } else {
      produtoService.createProduto(produto);
    }
    navigate('/produtos');
  };

  return (
    <div>
      <h4>{id ? 'Alterar Produto' : 'Novo Produto'}</h4>
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={handleSubmit} className="my-14">
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Descrição</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="descricao"
                  value={produto.descricao.toUpperCase()}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Valor</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="valor"
                  value={valorFormatado}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row linha">
              <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-primary float-end">Salvar</button>
                <Link to="/produtos" className="btn btn-primary btn-md float-end btn-spacing" title="Voltar">
                  <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProdutoForm;
