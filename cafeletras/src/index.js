import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShopBookList from './pages/ShopBookList';
import InputShop from './pages/InputShop';
import PayBook from './pages/PayBook';
import Reservas from './pages/Reservas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='/reservas' element={<Reservas />}></Route>
    <Route path='/tienda' element={<ShopBookList />}></Route>
    <Route path='/tienda/login' element={<InputShop />}></Route>
    <Route path='/tienda/login/pago' element={<PayBook />}></Route>
    
  </Routes>
 </BrowserRouter>
);
