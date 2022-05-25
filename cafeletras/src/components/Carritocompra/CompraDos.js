import React from 'react';
import CompraCss from './CompraCss.css';

function CompraDos() {
    return (
        <div>
        <article class="shop-box">
        <form class="form-shop" name="form" action="compras-b.html" method="get" target="_self"
                autocomplete="autocomplete">
                <h2>Dirección de envío</h2>
                <hr/>
                <div class="form-box">
                    <div class="form-item-first">
                        <label for="ciudad1" class="label">Departamento</label>
                        <select name="ciudad1" id="ciudad1">
                            <option value="0" selected>Elige un departamento</option>
                            <optgroup label="Centro">
                                <option value="1">Distrito Capital</option>
                                <option value="2">Cundinamarca</option>
                                <option value="3">Antioquia</option>
                                <option value="4">Santander</option>
                                <option value="5">Tolima</option>
                                <option value="6">Huila</option>
                                <option value="7">Boyacá</option>
                                <option value="8">Risaralda</option>
                                <option value="9">Caldas</option>
                                <option value="10">Quindío</option>
                                <option value="11">Norte de Santander</option>
                            </optgroup>
                            <optgroup label="Norte">
                                <option value="12">Cordoba</option>
                                <option value="13">Sucre</option>
                                <option value="14">Bolivar</option>
                                <option value="15">Cesar</option>
                                <option value="16">Magdalena</option>
                                <option value="17">Atlántico</option>
                                <option value="18">La Guajira</option>
                            </optgroup>
                            <optgroup label="Oriente">
                                <option value="19">Meta</option>
                                <option value="20">Arauca</option>
                                <option value="21">Casanare</option>
                                <option value="22">Vichada</option>
                            </optgroup>
                            <optgroup label="Occidente">
                                <option value="23">Cauca</option>
                                <option value="24">Nariño</option>
                                <option value="25">Valle del Cauca</option>
                                <option value="26">Chocó</option>
                            </optgroup>
                            <optgroup label="Sur">
                                <option value="27">Putumayo</option>
                                <option value="28">Guaviare</option>
                                <option value="29">Vaupés</option>
                                <option value="30">Caquetá</option>
                                <option value="31">Guainía</option>
                            </optgroup>
                        </select>
                    </div>
                    </div>
                    <div class="form-item">
                    <input name="name" id="name" type="text" placeholder=" Nombres"/></div>
                    <div class="form-item">
                        <input name="name" id="name" type="text" placeholder=" Apellidos"/></div>
                        <div class="form-item">
                            <input name="city" id="city" type="text" placeholder=" Ciudad - municipio"/></div>
                        <div class="form-item">
                    <input name="adress" id="adress" type="text" placeholder=" Dirección"/></div>
                    <div class="form-item">
                        <input name="adress-a" id="adress-a" type="text" placeholder=" Detalles de dirección"/></div>
                        <div class="form-item">
                            <input name="code" id="code" type="text" placeholder=" Código postal"/></div>
                    <div class="form-item">
                    <input name="telephone" id="telephone" type="text" placeholder=" Número contacto"/></div>
                    <div class="form-item">
                    <input type="email" name="email" id="email" placeholder=" Ingrese su correo electrónico"/></div>
                    <div class="form-item">       
                </div>
            <a href="compras-b.html"><button class="shop-button">Ir a pasarela de pago</button></a>

            </form>
        </article>
        <article class="shop-box shop-box-second">
    
        <div class="shop-cart-second">
            <img src="../utils/img/librocompra.svg"/>
            <div class="scs"><h3>Misión Economía</h3>
            <p>Mariana Mazzucato</p></div>
            <h3>$40.000</h3>
        </div>
        <hr/>
        <div class="shop-item-second">
            <input class="gift-card" type="gift-card" name="gift-card" id="gift-card" placeholder=" Tarjeta de regalo"/>
            <button class="single-button">Usar</button>
        </div>
        <hr/>
        <div class="shop-item-second">
            <h3>SUBTOTAL</h3>
            <h2>$40.000</h2>
        </div>
        <div class="shop-item-second">
            <h3>Envío</h3>
            <h2>$10.000</h2>
            
        </div>
            <hr/>
        <div class="shop-item-second">
            <h2>TOTAL</h2>
            <h2>$50.000</h2>
        </div>
    </article>
    <section class="background-aviso">
        <article class="cont-aviso">
            <div><i class="fa-solid fa-circle-check"></i>
            <h4>Pedido finalizado</h4></div>
            <p>Se enviará a tu correo la información del pedido, así como posibles cambios</p>
            <article class="cont-aviso-boton">
                <button class="aviso-a">
                    <a href="compras-a.html">Continuar</a>
                </button>
                <button class="aviso-b">
                    <a href="../index.html">Ir a inicio</a>
                </button>
            </article>
        </article>
    </section>
    </div>
    )
}

export default CompraDos;