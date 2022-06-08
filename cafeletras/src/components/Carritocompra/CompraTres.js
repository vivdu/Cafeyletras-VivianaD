import React from 'react';
import './CompraCss.css';
import Librocompra from './librocompra.svg';

function CompraTres() {
    return (
        <div>
        
        <article className="shop-box shop-box-second">
    
        <div className="shop-cart-second">
            <img src={Librocompra} alt='portada libro'/>
            <div className="scs"><h3>Misión Economía</h3>
            <p>Mariana Mazzucato</p></div>
            <h3>$40.000</h3>
        </div>
        <hr/>
        <div className="shop-item-second">
            <input className="gift-card" type="gift-card" name="gift-card" id="gift-card" placeholder=" Tarjeta de regalo"/>
            <button className="single-button">Usar</button>
        </div>
        <hr/>
        <div className="shop-item-second">
            <h3>SUBTOTAL</h3>
            <h2>$40.000</h2>
        </div>
        <div className="shop-item-second">
            <h3>Envío</h3>
            <h2>$10.000</h2>
            
        </div>
            <hr/>
        <div className="shop-item-second">
            <h2>TOTAL</h2>
            <h2>$50.000</h2>
        </div>
    </article>
    
    </div>
    )
}

export default CompraTres;