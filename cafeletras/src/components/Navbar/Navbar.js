import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from './logotipo.svg'

function Navbar() {
    return(
//caracteristicas del componente/
<div id="d-header-one">
    <div className="d-header-one-nav">
    <img src={Logo}/>
    <a href="./pages/login.html"><i className="fa-solid fa-user"></i></a>
    <a className="b-shop"><Link to="/tienda"> <i className="fa-solid fa-cart-shopping"></i></Link></a>
</div>
    <div id="d-header-second">
        <div className="d-header-second-nav">
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
        <div className="search2">
            <div className="search_wrap2">
                <div className="search_box2">
                    <input type="text" className="input" placeholder="Buscar"/>
                    <div className="btn btn_common2">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
export default Navbar;