import React, { useState } from 'react';
import './PayCart.css';
import ModalShop from '../ModalShop/ModalShop';

function PayCart() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main>
            <div className="shop-box-second center-text">
                <div><h2><i className="fa-solid fa-money-check-dollar"></i> Pagos</h2>
                
                <h3> Selecciona el medio de pago a utilizar para proceder al pago</h3></div>

                <div className="select-box"><select name="ciudad1" id="pay-select">
                    <option value="0" defaultValue>Pago con tarjeta bancaria</option>
                    <option value="1" >Banco Uno</option>
                    <option value="2" >Banco Dos</option>
                    <option value="3" >Banco Tres</option>
                    <option value="4" >Banco Cuatro</option>
                    <option value="5" >Banco Cinco</option>
                </select>

                <select name="ciudad1" id="pay-select">
                    <option value="0" defaultValue>Pago con aplicación móvil</option>
                    <option value="1" >Nequi</option>
                    <option value="2" >Daviplata</option>
                </select></div>

                <div className="select-box"><select name="ciudad1" id="pay-select">
                    <option value="0" defaultValue>Pago en puntos físicos</option>
                    <option value="1" >Baloto</option>
                    <option value="2" >Giros</option>
                    <option value="3" >PagaTodo</option>
                </select>

                <select name="ciudad1" id="pay-select">
                    <option value="0" defaultValue>Pago en MercadoPago</option>
                    <option value="1" >Opcion uno</option>
                    <option value="2" >Opcion dos</option>
                    
                </select></div>
                    <div className='button-cart'>
                        <button className="submit-button" onClick={() => setIsOpen(true)}>
                            Proceder al pago
                        </button>
                        {isOpen && <ModalShop setIsOpen={setIsOpen} />}
                    </div>
                
            </div>
        </main>
    )
}
export default PayCart;