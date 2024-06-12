import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import clienteService from './../../services/clienteService'; 
import InputMask from 'react-input-mask';
import './../../styles/Clientes/ClienteForm.css';

const ClienteForm = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    dataNasc: '',
    email: ''
  });

  useEffect(() => {
    // Usando o clienteService para obter os dados do cliente
    const clienteId = parseInt(id);
    const clienteEncontrado = clienteService.getClienteById(clienteId);

    if (clienteEncontrado !== null && clienteEncontrado !== undefined)
      setCliente(clienteEncontrado);
  }, [id]);

  if (id && !cliente) {
    return <p>Carregando...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'email' ? value.toLowerCase() : value.toUpperCase();
    setCliente({ ...cliente, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados do cliente
  };

  return (
    <div>
      <h4>{id ? 'Alterar Cliente' : 'Novo Cliente'}</h4>
      <hr />
      <div className="row">
        <div className="col-md-10">
          <form onSubmit={handleSubmit} className="my-14">
            <div className="form-group row linha">
              <label htmlFor="nome" className="col-sm-3 col-form-label text-right">Nome</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="nome" 
                  name="nome"
                  value={cliente.nome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label htmlFor="cpf" className="col-sm-3 col-form-label text-right">CPF</label>
              <div className="col-sm-9">
                <InputMask
                  mask="999.999.999-99"
                  className="form-control"
                  id="cpf"
                  name="cpf"
                  value={cliente.cpf}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label htmlFor="endereco" className="col-sm-3 col-form-label text-right">Endereço</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  name="endereco"
                  value={cliente.endereco}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label htmlFor="telefone" className="col-sm-3 col-form-label text-right">Telefone</label>
              <div className="col-sm-9">
                <InputMask
                  mask="(99) 99999-9999"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  value={cliente.telefone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label htmlFor="dataNasc" className="col-sm-3 col-form-label text-right">Data de Nascimento</label>
              <div className="col-sm-9">
                <InputMask
                  mask="99/99/9999"
                  className="form-control"
                  id="dataNasc"
                  name="dataNasc"
                  value={cliente.dataNasc}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <label htmlFor="email" className="col-sm-3 col-form-label text-right">Email</label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={cliente.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row linha">
              <div className="col-sm-9 offset-sm-3">
                <button type="submit" className="btn btn-primary float-end">Salvar</button>
                <Link to="/clientes" className="btn btn-primary btn-md float-end btn-spacing" title="Voltar">
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

export default ClienteForm;
