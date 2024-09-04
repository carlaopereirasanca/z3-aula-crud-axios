
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {

  // Desestruturação, para pegar apenas o componente id
  // enviado na URL ( <Link to={`/read/${d.id}`}... ):
  const {id} = useParams();

  // Estado para os valores dos campos no formulário.
  // Os dados lidos da API serão colocados aqui,
  // para exibição inicial nos campos.
  const [values, setValues] = useState( {
    name: '',
    email: '',
    phone: ''
  } );

  // Usando o id para buscar o objeto específico.
  useEffect( () => {
    axios.get('https://66d22bfd62816af9a4f6045d.mockapi.io/users/' + id)
    .then( res => setValues(res.data) )
    .catch( err => console.log(err) );
  }, [] );

  // Hook para navegar para a página Home:
  const navigate = useNavigate();

  // Função que efetiva a alteração dos dados na API:
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('https://66d22bfd62816af9a4f6045d.mockapi.io/users/' + id, values)
    .then( res => {
      navigate('/');
    } )
    .catch( err => console.log(err) );
  }

  // A interface aqui é 99% igual a do componente Create.
  // Mas note que aqui utilizamos 'value' para colocar o valor
  // lido da API já no campo (estado values).
  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
      <h1>Editar usuário</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-2'>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' className='form-control' 
                 placeholder='Digite o nome' 
                 value={values.name}
                 onChange={ e => setValues( {...values, name: e.target.value} ) }
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' className='form-control' 
                 placeholder='Digite o email' 
                 value={values.email}
                 onChange={ e => setValues( {...values, email: e.target.value} ) }
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="phone">Celular:</label>
          <input type="text" name='phone' className='form-control' 
                 placeholder='Digite o celular' 
                 value={values.phone}
                 onChange={ e => setValues( {...values, phone: e.target.value} ) }
          />
        </div>

        <button className='btn btn-success'>Atualizar</button>
        <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
      </form>
    </div>
  </div>
  )
}

export default Update

