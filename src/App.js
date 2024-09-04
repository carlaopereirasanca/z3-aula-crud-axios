
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Create from './componentes/Create';
import Update from './componentes/Update';
import Read from './componentes/Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/read/:id' element={<Read />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
