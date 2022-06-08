import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CompraTres from '../components/Carritocompra/CompraTres';
import FormCompra from '../components/Carritocompra/CompraDos';
function Compras2(){
    return (
        <main>
        <Header />
        <Navbar />
        <FormCompra />
        <CompraTres />
        <Footer />
        </main>
    )
}
export default Compras2;