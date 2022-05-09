import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../NavBar/CartWidget.css';
import '../Pages/CartPage.css';
import ModalCustom from '../modal/modal';
import db from '../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';



const Cart = () => {
    const [openModal, setOpenModal] = useState(false)
    
    const [contactData, setContactData] = useState({
        name: "",
        phone: '',
        email: '',
    })
    const { cartProducts, removeProducts, totalPrice} = useContext(CartContext)
    
    const [order, setOrder] = useState(
        {
            buyer : contactData,
            items: cartProducts,
            total: totalPrice
        }
    )
    const[succesOrder, setSuccesOrder ] = useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        let preOrder = {...order,
            buyer: contactData
        }
        setOrder({...order,
            buyer: contactData})
            pushOrder(preOrder)
    }

    const pushOrder = async (preOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, order)
        console.log("orden generada", orderDoc.id)
        setSuccesOrder(orderDoc.id)
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        setContactData({
            ...contactData,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value, e.target.name)
    }

    return (
        <div className='carrito'>
            <p className="subtitle">Carrito de Compras</p>
            <Divider />
            {cartProducts.map( (cartProduct) => {
                const { id, image, price, description, title} = cartProduct
            return(
                <div>
                    <MenuItem className='carrito-items' key={id}>
                        <div className='cart-image-container'>
                            <img className='cart-image' src={`./${image}`} /> 
                        </div>
                        <div className='texto' >
                            <p>{title}</p>
                            <p className='texto3 overflow-visible'>{description}</p>
                            <span>$ {price}</span>
                        </div>
                            <DeleteIcon onClick={() => removeProducts(cartProduct)}/>
                        </MenuItem>
                        <Divider />
                    </div>
                    )
            })}
 
            <div className="bottomMenu">
                <Link to={`/`}  className='botonContinue'><Button color="error" variant="outlined">Continuar Comprando</Button></Link>
                <div className="resumen">
                    <p className="total">Total</p>
                    <p className='texto2'>{totalPrice}</p>
                    <Button color="error" variant="contained" className="finalizar" onClick={()=>setOpenModal(true)}>Finalizar la compra</Button>
                </div>
            </div>
            <ModalCustom handleClose={()=> setOpenModal(false)} open={openModal} >
                <h2 className='finaliza-title'>Finalizá tu orden</h2>
                {succesOrder ?(
                    <div>
                        <h3 className='finaliza-title'>Orden Id: {succesOrder}</h3>
                        <p className='finaliza-subtitle'>Pago aceptado con exito!</p>
                    </div>
                ) : (
                <form className='finaliza-form' onSubmit={handleSubmit}>
                    <div className='finaliza-input-list'>
                        <div className="finaliza-input-container">
                            <label>Nombre y Apellido</label>
                            <input className='finaliza-input' tipe="text" name='name' required placeholder='Maru Valania' onChange={handleChange} value={contactData.name}></input>
                        </div>
                        <div className="finaliza-input-container">
                            <label>Teléfono</label>
                            <input className='finaliza-input' tipe="number" name='phone' required placeholder='0221549493' onChange={handleChange} value={contactData.phone}></input>
                        </div>
                        <div className="finaliza-input-container">
                            <label>E-mail</label>
                            <input className='finaliza-input' tipe="mail" name='email' required placeholder='info@maruvalanianutricion.com.ar' onChange={handleChange} value={contactData.email}></input>
                        </div>
                    </div>
                    <div className='finaliza-buttons'>
                        <Button color='error' variant='contained' type="submit">Enviar</Button >
                        <Button color='error' variant='outlined'>Limpiar</Button>
                    </div>
                </form>
                )}

            </ModalCustom>
        </div>
    )
}

export default Cart