import React from 'react';
import './CompraCss.css';
import Librocompra from './librocompra.svg';

function CompraUno(){
    return (
        <section class="shop-box-main">
        <h2>CARRO DE COMPRAS</h2>
        <hr/>
        <div class="shop-cart">
            <img src={Librocompra}/>
            <div class="shop-cart-box"><h4>Misión Economía</h4>
            <h5>Mariana Mazzucato</h5>
            <button> -  1  + </button></div>
            <h4>$40.000</h4>
        </div>
        <hr/>
        <div class="shop-item">
            <h3>INSTRUCCIONES ESPECIALES PARA EL ENVÍO</h3>
            <textarea rows="4" cols="40" name="observaciones" placeholder=" Observaciones"></textarea>
        </div>
        <hr/>
        <div class="shop-item">
            <div><h3>SUBTOTAL</h3><h2>$40.000</h2></div>
            <p>Los códigos de descuento, los costes de envío y los impuestos se añaden durante el pago.</p>
            <a href="compras-a.html"><button class="shop-button">FINALIZAR PEDIDO</button></a>
        </div>
        
        </section>
    )
}
export default CompraUno;