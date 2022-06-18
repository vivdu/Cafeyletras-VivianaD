import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FormReserva from '../components/Reservas/Form';

function Reservas(){
    return (
        <main>
        <Header />
        <Navbar />
        <FormReserva />
        <Footer />
        </main>
    )
}
export default Reservas;