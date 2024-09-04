
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const [data, setData] = useState([]);

  useEffect( () => {
    axios.get('https://66d22bfd62816af9a4f6045d.mockapi.io/users')
    .then( res => setData(res.data) )
    .catch( err => console.log(err) );
  }, [] );

  return (
    
    <div className='d-flex flex-column justify-content-center 
                    align-items-center bg-light vh-100'>

      <h1>Lista de Usuários</h1>

      <div className='w-75 rounded bg-white border shadow p-4'>

        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>NOVO</Link>
        </div>

        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map( (d,i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Ler</Link>
                    <button className='btn btn-sm btn-primary me-2'>Editar</button>
                    <button className='btn btn-sm btn-danger'>Apagar</button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home

