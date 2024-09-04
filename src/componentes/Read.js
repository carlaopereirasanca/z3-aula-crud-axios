
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Read() {

  const [data, setData] = useState([]);

  const {id} = useParams();

  useEffect( () => {
    axios.get('https://66d22bfd62816af9a4f6045d.mockapi.io/users/' + id)
    .then( res => setData(res.data) )
    .catch( err => console.log(err) );
  }, [] );

  console.log(data);

  return (
    <div>Read</div>
  )
}

export default Read

