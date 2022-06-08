import './Header.css'
import Logo from './logo.svg';

function Header(){
    return(
//caracteristicas del componente/
<header>
<a href="index.html" className="m-logo"><img src={Logo}/></a>
        <div className="search">
            <div className="search_wrap">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Buscar"/>
                    <div className="btn btn_common">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a className="b-shop" href="./pages/compras.html"><i className="fa-solid fa-cart-shopping"></i></a>
            <input type="checkbox" id="menu-bar" hidden/>
            <label htmlFor="menu-bar"><i className="fa-solid fa-bars"></i></label>
        <nav className="m-navbar">
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