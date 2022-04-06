import React from 'react'
import Button from '@mui/material/Button';
import './NavBar.css';
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom'





function NavBar() {

    return(
        <header className='main-header'>
            <div className='container-logo'>
                <Link to={"/"} ><img src='nombre444.png' className='img-header' /></Link>
            </div>
            <ul className='navbar'>
                <li><Button color="error">Home</Button></li>
                <li>< Button color="error"><Link to={"/Planes"}>Planes</Link></Button></li>
                <li>< Button color="error"><Link to={"/Recetarios"}>Recetarios</Link></Button></li>
                <li>< Button color="error"><Link to={"/PlanesIntegrales"}>Planes Integrales</Link></Button></li>
                <li><Button color="error"><a href="http://maruvalanianutricion.com.ar/#unPocoDeMi" target="_blank">Sitio</a></Button></li>
                <li><Button color="error"><Link to={"/contacto"}>Contacto</Link></Button></li>
                <CarWidget />
            </ul>
        </header>
    )
}

export default NavBar;