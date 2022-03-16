import React from 'react'
import Button from '@mui/material/Button';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {

    return(
        <header className='main-header'>
            <div className='container-logo'>
                <img src='nombre444.png' className='img-header' />
            </div>
            <ul className='navbar'>
                <li><Button color="error">Home</Button></li>
                <li><Button color="error">Products</Button></li>
                <li><Button color="error">About</Button></li>
                <li><Button color="error">Contact</Button></li>
                <Button  color="error"><ShoppingCartIcon className="cart" color="error" /></Button>
            </ul>
        </header>
    )
}

export default NavBar