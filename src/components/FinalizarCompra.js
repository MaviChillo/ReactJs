import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Feedback from 'react-bootstrap/Feedback'
import { createItem } from '../app/api';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
import CartFinalizar from './CartFinalizar';


function FinalizarCompra() {

    const [orderId, setOrderId] = useState('')
    const [order, setOrder] = useState()
    const { cart, clear, totalPrice } = useContext(CartContext)
    const [comprador, setComprador] = useState({})
    const [validated, setValidated] = useState(false);

    const Submit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            setValidated(true);
            let orden = {
                comprador,
                items: cart,
                total: '$' + totalPrice(),
            }
            createItem(orden)
                .then((res) => {
                    setOrderId(res)
                    console.log(cart)
                    // clear()
                })

                //     getOrdenById(orderId)
                //         .then((res) => {
                //         setOrder(res)
                //         console.log(cart)
                //         })
                
            // getPedido()
            //     .then((res) => {
            //         setOrder(res)
            //         console.log(cart)
            // })
            
        }
    };

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {orderId
                ? <div className='gracias'>
                    <br />
                    <h2>Gracias por tu compra!</h2>
                    <h4>Tu numero de orden es {orderId}</h4>
                    <CartFinalizar />
                    <Link id='ver-prod' to={'/'}><button id="button" onClick={clear}>Volver a la pagina de inicio</button></Link>
                    <br />
                </div>
                : <Form className='form-father' noValidate validated={validated} onSubmit={Submit}>
                    <h3 className="completa-datos"> Completa tus datos para finalizar la compra!</h3>
                    <Row className="mb-3 mt-4 justify-content-center form-group">
                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                            <Form.Label className='form-label'>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={datosComprador} required/>
                            <Form.Control.Feedback>✔</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                            <Form.Label className='form-label'>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" name='apellido' onChange={datosComprador} required/>
                            <Form.Control.Feedback>✔</Form.Control.Feedback>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3 mt-4 justify-content-center form-group">
                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                            <Form.Label className='form-label'>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name='email' onChange={datosComprador} required  />
                            <Form.Control.Feedback>✔</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label className='form-label'>Telefono</Form.Label>
                            <Form.Control type="number" placeholder="Telefono" name='telefono' onChange={datosComprador} required  />
                            <Form.Control.Feedback>✔</Form.Control.Feedback>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3 mt-4 justify-content-center form-group">
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label className='form-label'>Codigo Postal</Form.Label>
                            <Form.Control type="number" placeholder="Codigo Postal" name='codigo-postal' onChange={datosComprador} required />
                            <Form.Control.Feedback>✔</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Button id="button" type="submit" className='botonform boton-terminar-compra'>Finalizar Compra</Button>
                    <br />
                    <br />
                </Form>}
        </>
    );
}

export default FinalizarCompra