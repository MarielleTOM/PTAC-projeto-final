import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NovoVideo from './Todo/ToDo';
import EmDestaque from './detalhe/detalhe';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/NovoVideo' element={<NovoVideo />}></Route>
        <Route path='/EmDestaque' element={<EmDestaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
