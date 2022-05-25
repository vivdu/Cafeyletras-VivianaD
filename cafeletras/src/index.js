import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Compras1 from './pages/Compras1';
import Compras2 from './pages/Compras2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='/compras1' element={<Compras1 />}></Route>
    <Route path='/compras2' element={<Compras2 />}></Route>
    
  </Routes>
 </BrowserRouter>
);
