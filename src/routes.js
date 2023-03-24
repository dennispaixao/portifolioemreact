import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Index from './screens/index'
import Sobre from './screens/sobre';
import Habilidades from './screens/habilidades';
import Contato from './screens/contato';
import Portifolio from './screens/portifolio';



  const Rotas = ()=>{
   
    
    return(
   
<Router>
    <Routes>

    <Route path='/' element={<Index />} />
    <Route path='/sobre' element={<Sobre />} />
    <Route path='/habilidades' element={<Habilidades />} />
    <Route path='/portifolio' element={<Portifolio />} />
    <Route path='/contato' element={<Contato />} />
 

    </Routes>
</Router>
   
)}

export default Rotas;