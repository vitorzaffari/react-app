import { Button, Navbar, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext)
    const totalSum = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const checkout = async () => {
        await fetch ('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url){
                window.location.assign(response.url);  
            }
        })
    }
    return (
        <>
        <Navbar expand='sm'>
            <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart ({totalSum} Items)</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {totalSum > 0 ?
                    <>
                    <p>Items in cart:</p>
                    {cart.items.map((cur, index) => (
                        <CartProduct key={index} id={cur.id} quantity={cur.quantity}></CartProduct>
                    ))}
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                        <Button variant='success' onClick={checkout}>
                            Purchase items!
                        </Button>
                    </>
                :
                    <h1>No items in the cart</h1>
                }
                </Modal.Body>
        </Modal>
        </>
    )

}

export default NavbarComponent;