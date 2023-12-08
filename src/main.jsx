import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import EmDestaque from './EmDestaque/EmDestaque'
import NovoVideo from './NovoVideo/NovoVideo'
import Detalhe from './Detalhe/Detalhe'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/EmDestaque" element={<EmDestaque />}></Route>
        <Route path='/NovoVideo' element={<NovoVideo/>}></Route>
        <Route path='/Detalhe/:id' element={<Detalhe/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
