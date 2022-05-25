import React from 'react';
import './Navbar.css'
import Logo from './logotipo.svg'

function Navbar() {
    return(
//caracteristicas del componente/
<div id="d-header-one">
    <div class="d-header-one-nav">
    <img src={Logo}/>
    <a href="./pages/login.html"><i class="fa-solid fa-user"></i></a>
    <a class="b-shop" href="./pages/compras.html"><i class="fa-solid fa-cart-shopping"></i></a>
</div>
    <div id="d-header-second">
        <div class="d-header-second-nav">
        <ul>
            <li><a href="index.html">Inicio</a></li>
                    <li><a href="./pages/login.html">Login</a></li>
                    <li><a href="./pages/catalogo.html">Catalogo +</a>
                        <ul>
                            <li><a href="./pages/ninios.html">Ninos</a></li>
                            <li><a href="./pages/adultos.html">Adultos</a></li>
                            <li><a href="./pages/hogar.html">Hogar</a></li>
                        </ul>
                    </li>
                    <li><a href="./pages/reservas.html">Reservas</a></li>
                    <li><a href="./pages/actividades.html">Actividades</a></li>
        </ul>
        </div>
        <div class="search2">
            <div class="search_wrap2">
                <div class="search_box2">
                    <input type="text" class="input" placeholder="Buscar"/>
                    <div class="btn btn_common2">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
export default Navbar;