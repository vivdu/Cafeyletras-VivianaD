import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, isInCart } = this.props;

        return (
            <div>
                <div className="product-box">
                    <img src={image} alt="product" />
                    <div className="product">
                        <h3>{name}</h3>
                        <div className="product__price">{price} {currency}</div>
                    </div>
                    </div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-red' : 'btn btn-green'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Eliminar' : 'Agregar'}
                        </button>
                    </div>
                

            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
