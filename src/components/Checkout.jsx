import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContextComponent"

function Checkout() {
  const { cart, setCart } = useContext(CartContext)
  const [ total, setTotal] = useState(0)
  const [ idOrden, setIdOrden] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.producto.precio * item.total
    }, 0)

    setTotal(total)
  }, [cart])

  const crearOrden = () => {
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
            <p>${item.producto.precio}x{item.total} = ${item.producto.precio*item.total}</p>
          </div>
        )
      })}
      <h2>Total: ${total}</h2>
      <button onClick={crearOrden}>Finalizar Compra</button>
      <h2>Orden generada con id: {idOrden}</h2>
    </>
  )
}

export default Checkout