import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FormShop from '../components/InputForm/Validacion';

function InputShop(){
    return (
        <main>
        <Header />
        <Navbar />
        <FormShop />
        <Footer />
        </main>
    )
}
export default InputShop;