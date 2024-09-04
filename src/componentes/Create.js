
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

  const [values, setValues] = useState( {
    name: '',
    email: '',
    phone: ''
  } );

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://66d22bfd62816af9a4f6045d.mockapi.io/users', values)
    .then( res => {
      console.log(res);
      navigate('/');
    } )
    .catch( err => console.log(err) );
  }

  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>

        <h1>Adicionar usuário</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' className='form-control' 
                   placeholder='Digite o nome' 
                   onChange={ e => setValues( {...values, name: e.target.value} ) }
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' className='form-control' 
                   placeholder='Digite o email' 
                   onChange={ e => setValues( {...values, email: e.target.value} ) }
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Celular:</label>
            <input type="text" name='phone' className='form-control' 
                   placeholder='Digite o celular' 
                   onChange={ e => setValues( {...values, phone: e.target.value} ) }
            />
          </div>
          <button className='btn btn-success'>Enviar</button>
          <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
        </form>

      </div>
    </div>
  )
  
}

export default Create;

