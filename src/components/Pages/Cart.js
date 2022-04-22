import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../NavBar/CartWidget.css';
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
    console.log("order", order)


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
            <p className="title">Carrito de Compras</p>
            <Divider />
            {cartProducts.map( (cartProduct) => {
                const { id, image, price, description, title} = cartProduct
            return(
                <div>
                    <MenuItem className='carrito-items' key={id}>
                        <div>
                            <img className='cart-image' src={`./${image}`} /> 
                        </div>
                        <div >
                            <p>{title}</p>
                            <p className='texto'>{description}</p>
                            <span>$ {price}</span>
                        </div>
                            <DeleteIcon onClick={() => removeProducts(cartProduct)}/>
                        </MenuItem>
                    </div>
                    )
            })}
            <div className="bottomMenu">
                <Link to={`/`}  className='botonContinue'><Button color="error" variant="contained">Continuar Comprando</Button></Link>
                <div className="resumen">
                    <p className="total">Total</p>
                    <p className='texto2'>{totalPrice}</p>
                    <Button color="error" variant="contained" className="finalizar" onClick={()=>setOpenModal(true)}>Finalizar la compra</Button>
                </div>
            </div>
            <ModalCustom handleClose={()=> setOpenModal(false)} open={openModal} className="modal">
                <h2>Finaliza tu orden</h2>
                {succesOrder ?(
                    <div>
                        <h3>Orden Id: {succesOrder} fue generada correctamente</h3>
                    </div>
                ) : (
                <form onSubmit={handleSubmit}>
                <input tipe="text" name='name' placeholder='Nombre' onChange={handleChange} value={contactData.name}></input>
                <input tipe="number" name='phone' placeholder='Telefono' onChange={handleChange} value={contactData.phone}></input>
                <input tipe="mail" name='email' placeholder='Email' onChange={handleChange} value={contactData.email}></input>
                <Button>Limpiar</Button>
                <Button type="submit">Enviar</Button >
            </form>
                )}
            </ModalCustom>
        </div>
    )
}

export default Cart