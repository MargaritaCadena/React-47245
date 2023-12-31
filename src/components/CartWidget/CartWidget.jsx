import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import "./CartWidget.css"
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContextComponent'

function CartWidget() {
  const { cart } = useContext(CartContext)
  const [ cartTotal, setCartTotal ] = useState(0)

  useEffect(() => {
    const cantidad = cart.reduce((acc, item) => {
      return acc + item.cantidad
    }, 0)

    setCartTotal(cantidad)
  }, [cart])

  return (
    <Button variant="outline-info">
      <img
        alt=""
        src="/assets/images/carrito.png"
        width="25"
        height="25"
      />{" "}
      <Badge bg="success">{cartTotal}</Badge>
    </Button>
  )
}

export default CartWidget