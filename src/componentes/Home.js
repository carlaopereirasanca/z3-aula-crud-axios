
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

  // Função para apagar um registro:
  const handleDelete = (id) => {

    // Teria formas melhores de pegar essa confirmação,
    // por exemplo, usando um componente pronto da biblioteca 
    // Material-ui.... mas a aula já tá grande demais! :-)
    const confirm = window.confirm("Quer mesmo apagar este usuário?");

    if(confirm) {

      // Apaga na API, e, se com sucesso, apaga no estado data.
      // Isso forçará nova renderização, para eliminar o registro da tabela.

      axios.delete(`https://66d22bfd62816af9a4f6045d.mockapi.io/users/${id}`)
        .then(() => {
          // Usa filter para só copiar os registros diferentes do id que apagamos.
          // Usa função dentro do setData, para garantir que estamos trabalhando
          // com o último estado disponível.
          setData(prevData => prevData.filter(user => user.id !== id));
        })
        .catch(err => console.log(err));
    }
  }

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
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Editar</Link>
                    <button onClick={ e => handleDelete(d.id) } className='btn btn-sm btn-danger'>Apagar</button>
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

