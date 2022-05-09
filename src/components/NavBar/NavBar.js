import React from 'react'
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'





function NavBar() {

    return(
        <header className='main-header'>
            <div className='container-logo'>
                <Link to={"/"} ><img src='nombre444.png' className='img-header' /></Link>
            </div>
            <ul className='navbar ulNavbar'>
                <li><Button color="error"><Link to={"/"}>Home</Link></Button></li>
                <li>< Button color="error"><Link to={"/Planes"}>Planes</Link></Button></li>
                <li>< Button color="error"><Link to={"/Recetarios"}>Recetarios</Link></Button></li>
                <li>< Button color="error"><Link to={"/Planesintegrales"}>Planes Integrales</Link></Button></li>
                <li><Button color="error"><a href="http://maruvalanianutricion.com.ar/#unPocoDeMi" target="_blank">Sitio</a></Button></li>
                <CartWidget />
            </ul>
        </header>
    )
}

export default NavBar;