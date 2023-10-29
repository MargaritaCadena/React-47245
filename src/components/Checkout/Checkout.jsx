import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../context/CartContextComponent"
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Checkout.css"

function Checkout() {
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [idOrden, setIdOrden] = useState(0)
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // Calcula el valor total del carrito
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.producto.precio * item.total
    }, 0)

    setTotal(total)
  }, [cart])

  // Valida si los campos de email estan iguales
  useEffect(() => {
    setButtonDisabled(email === '' || email !== confirmEmail)
  }, [email, confirmEmail])

  const crearOrden = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(emailInput.current.value)
    const orden = {
      prductos: cart
    }

    console.log(orden)
    setCart([])
    setIdOrden(1234567890)
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.producto.id}>
            <img src={item.producto.imagen} />
            <h2>{item.producto.nombre}</h2>
            <p>${item.producto.precio}x{item.total} = ${item.producto.precio * item.total}</p>
          </div>
        )
      })}
      <h2>Total: ${total}</h2>
      <Form onSubmit={crearOrden}>
        <Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="lastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="telephone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" />
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
      <h2>Orden generada con id: {idOrden}</h2>
    </>
  )
}

export default Checkout