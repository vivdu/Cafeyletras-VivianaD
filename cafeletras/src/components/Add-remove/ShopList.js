import React from 'react';
import './ShopList.css'
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';

function ShopList () {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 shop-title-box">
                    <h2>Tienda Virtual</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ProductList />
                </div>
                <div className="col-12 col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default ShopList;