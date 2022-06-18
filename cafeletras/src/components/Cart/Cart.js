import React from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart({ items, total, currency, removeFromCart }) {
    return (
        <div className="shop-box">
            <h2>Carro de compras</h2>

            <div className="cart">
                <div className="cart-panel">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Carrito vacío</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>

                </div>
            </div>
            <div className='button-cart'><Link to="login"><button className="submit-button">Continuar</button></Link></div>

        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
