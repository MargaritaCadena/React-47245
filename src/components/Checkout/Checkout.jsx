import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../context/CartContextComponent"
import { Button, Col, Form, Row } from "react-bootstrap";
import { collection, getFirestore, addDoc, Timestamp } from 'firebase/firestore'
import "./Checkout.css"

function Checkout() {
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [idOrden, setIdOrden] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // Calcula el valor total del carrito
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.producto.precio * item.cantidad
    }, 0)

    setTotal(total)
  }, [cart])

  // Valida si se habilita el boton
  useEffect(() => {
    const camposLlenos = nombre === '' || apellido === '' || telefono === '' || email === '' || confirmEmail === ''
    const emailIguales = email !== confirmEmail

    setButtonDisabled(camposLlenos || emailIguales)
  }, [nombre, apellido, telefono, email, confirmEmail])

  const crearOrden = (event) => {
    event.preventDefault()

    const orden = {
      items: cart,
      cliente: {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
      },
      fecha: Timestamp.now(),
      estado: 'generada',
      total: total
    }

    const db = getFirestore()

    addDoc(collection(db, 'orders'), orden)
      .then((doc) => {
        setNombre('')
        setApellido('')
        setTelefono('')
        setEmail('')
        setConfirmEmail('')

        setCart([])
        setIdOrden(doc.id)
      })
  }

  return (
    idOrden === '' ?
      <>
        {cart.map((item) => {
          return (
            <div className="checkout-card" key={item.producto.id}>
              <img src={item.producto.imagen} />
              <h2>{item.producto.nombre}</h2>
              <p>${item.producto.precio}x{item.cantidad} = ${item.producto.precio * item.cantidad}</p>
            </div>
          )
        })}
        <h2 id="total">Total: ${total}</h2>
        <Form onSubmit={crearOrden}>
          <Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={apellido}
                onChange={(e) => { setApellido(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="telephone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                value={telefono}
                onChange={(e) => { setTelefono(e.target.value) }} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="confirmEmail">
              <Form.Label>Confirme Email</Form.Label>
              <Form.Control
                type="email"
                value={confirmEmail}
                onChange={(e) => { setConfirmEmail(e.target.value) }} />
            </Form.Group>
          </Row>

          <Row>
            <Button variant="primary" type="submit" disabled={buttonDisabled}>
              Finalizar Compra
            </Button>
          </Row>
        </Form>
      </> :
      <h2>Orden generada con id: {idOrden}</h2>
  )
}

export default Checkout