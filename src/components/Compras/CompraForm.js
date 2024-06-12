import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { formatCurrency } from './../../utils/formatCurrency';
import compraService from './../../services/compraService';
import './../../styles/Compras/CompraForm.css';

const CompraForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [compra, setCompra] = useState({
    fornecedor: '',
    produto: '',
    dataCompra: new Date().toISOString().split('T')[0],
    formaPagamento: 'DINHEIRO',
    valorUnitario: 0,
    quantidade: 1,
    valorCompra: 0,
  });
  const [valorUnitarioFormatado, setValorUnitarioFormatado] = useState('R$ 0,00');

  useEffect(() => {
    if (id) {
      const compraId = parseInt(id);
      const compraEncontrada = compraService.getCompraById(compraId);
      if (compraEncontrada) {
        setCompra(compraEncontrada);
        setValorUnitarioFormatado(formatCurrency(compraEncontrada.valorUnitario));
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'valorUnitario') {
      const valorNumerico = value.replace(/\D/g, '');
      const valorFormatado = formatCurrency(Number(valorNumerico) / 100);
      setValorUnitarioFormatado(valorFormatado);
      setCompra({
        ...compra,
        [name]: Number(valorNumerico) / 100,
        valorCompra: Number(valorNumerico) / 100 * compra.quantidade, 
      });
    } else if (name === 'quantidade') {
      setCompra({
        ...compra,
        [name]: parseInt(value, 10),
        valorCompra: parseInt(value, 10) * compra.valorUnitario, 
      });
    } else if (name === 'fornecedor' || name === 'produto') {
      setCompra({
        ...compra,
        [name]: value.toUpperCase(),
      });
    } else {
      setCompra({
        ...compra,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (id) {
      compraService.atualizarCompra(parseInt(id), compra);
    } else {
      compraService.adicionarCompra(compra);
    }
    navigate('/compras');
  };

  return (
    <div>
      <h4>{id ? 'Alterar Compra' : 'Nova Compra'}</h4>
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={handleSubmit} className="my-14">
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Fornecedor</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="fornecedor"
                  value={compra.fornecedor}
                  onChange={handleChange}
                  className="form-control uppercase"
                  required
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Produto</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="produto"
                  value={compra.produto}
                  onChange={handleChange}
                  className="form-control uppercase"
                  required
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Data da Compra</label>
              <div className="col-sm-9">
                <input
                  type="date"
                  name="dataCompra"
                  value={compra.dataCompra}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Forma de Pagamento</label>
              <div className="col-sm-9">
                <select
                  name="formaPagamento"
                  value={compra.formaPagamento}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="DINHEIRO">DINHEIRO</option>
                  <option value="PIX">PIX</option>
                  <option value="CRÉDITO">CRÉDITO</option>
                  <option value="DÉBITO">DÉBITO</option>
                </select>
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Valor Unitário</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="valorUnitario"
                  value={valorUnitarioFormatado}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Quantidade</label>
              <div className="col-sm-9">
                <input
                  type="number"
                  name="quantidade"
                  value={compra.quantidade}
                  onChange={handleChange}
                  className="form-control"
                  min="1"
                  required
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label className="col-sm-3 col-form-label text-right">Valor da Compra</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="valorCompra"
                  value={formatCurrency(compra.quantidade * compra.valorUnitario)}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row linha">
              <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-primary float-end">Salvar</button>
                <Link to="/compras" className="btn btn-primary btn-md float-end btn-spacing" title="Voltar">
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

export default CompraForm;