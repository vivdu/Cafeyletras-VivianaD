import React from 'react';
import './Footer.css'
import Logo from './logofooter.svg';

function Footer(){
    return(

<footer class="footer">
    <div class="foot1">
        <img src={Logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis vitae illo fuga beatae ipsa quisquam dolor voluptates perspiciatis.</p>
    </div>

    <div class="foot2">
        <h4>Acerca de Café y Letras</h4> 
        <a href="">Sobre Nosotros</a> 
        <a href="">Preguntas frecuentes</a>
    </div>

    <div class="foot3">
        <h4>Síguenos</h4>
        <i class="fa-brands fa-instagram socialnet"></i>
        <i class="fa-brands fa-facebook socialnet"></i>
        <i class="fa-brands fa-twitter socialnet"></i>
    </div>

    <div class="foot4">
        <h4>Contáctanos</h4>
        <p><i class="fa-brands fa-whatsapp"></i>  +57 3000000000</p>
        <p><i class="fa-solid fa-envelope"></i>  info@cafeyletras.com</p>
        <p><i class="fa-solid fa-location-dot"></i>  Calle 15 #45a-08</p>
    </div>

</footer>
);
}
export default Footer;