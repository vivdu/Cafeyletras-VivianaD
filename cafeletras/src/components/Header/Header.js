import './Header.css'
import Logo from './logo.svg';

function Header(){
    return(
//caracteristicas del componente/
<header>
<a href="index.html" class="m-logo"><img src={Logo}/></a>
        <div class="search">
            <div class="search_wrap">
                <div class="search_box">
                    <input type="text" class="input" placeholder="Buscar"/>
                    <div class="btn btn_common">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a class="b-shop" href="./pages/compras.html"><i class="fa-solid fa-cart-shopping"></i></a>
            <input type="checkbox" id="menu-bar" hidden/>
            <label for="menu-bar"><i class="fa-solid fa-bars"></i></label>
        <nav class="m-navbar">
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
        </nav>
    </div>
</header>
);
}
export default Header;