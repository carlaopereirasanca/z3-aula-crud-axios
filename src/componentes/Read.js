
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {

  const [data, setData] = useState([]);

  // Desestruturação, para pegar apenas o componente id
  // enviado na URL ( <Link to={`/read/${d.id}`}... ):
  const {id} = useParams();

  // Usando o id para buscar o objeto específico.
  // Array de dependência vazio: só vai executar uma vez,
  // na renderização inicial do componente.
  // Nao será chamado em renderizações subsequentes do componente.

  useEffect( () => {
    axios.get('https://66d22bfd62816af9a4f6045d.mockapi.io/users/' + id)
    .then( res => setData(res.data) )
    .catch( err => console.log(err) );
  }, [] );

  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>

        <h3>Detalhes do usuário</h3>

        <div className='mb-2'>
          <strong>Nome: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-3'>
          <strong>Celular: {data.phone}</strong>
        </div>

        <Link to={`/update/${id}`} className='btn btn-success'>Editar</Link>
        <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>

      </div>
    </div>
  )
}

export default Read;

