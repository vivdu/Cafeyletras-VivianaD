import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore } from 'redux';
import cartReducer from '../ducks/cart';
import productsReducer from '../ducks/products';
import ShopList from '../components/Add-remove/ShopList';
import productsData from '../data/products';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = legacy_createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);
function ShopBookList(){
    return (
        <main>
        <Header />
        <Navbar />
        <Provider store={store}>
        <ShopList />
        </Provider>
        <Footer />
        </main>
    )
}
export default ShopBookList;
