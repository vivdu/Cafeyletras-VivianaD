import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PayCart from '../components/PayBook/PayCart';

function PayBook(){
    return (
        <main>
        <Header />
        <Navbar />
        <PayCart />
        <Footer />
        </main>
    )
}
export default PayBook;