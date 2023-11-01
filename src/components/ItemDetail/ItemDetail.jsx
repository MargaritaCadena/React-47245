import { CartContext } from "../../context/CartContextComponent"
import "./ItemDetail.css"
import { useContext, useState } from "react"
import { Button } from "react-bootstrap";


function ItemDetail(props) {
  const productoFiltrado = props.producto
  const { cart, setCart } = useContext(CartContext)

  const [contador, setContador] = useState(1)

  const resta = () => {
    contador > 1 && setContador(contador - 1)
  }
  const agregarAlCarro = () => {
    const newCart = [...cart]
    const itemIndex = cart.findIndex((item) => {
      return item.producto.id === productoFiltrado.id
    })

    if (itemIndex !== -1) {
      newCart[itemIndex].cantidad += contador
    }
    else {
      newCart.push({ producto: { ...productoFiltrado }, cantidad: contador })
    }

    setCart(newCart)
  }

  return (
    <>
      <div className="detalleProducto">
        <img src={productoFiltrado.imagen} />
        <h2>Nombre: {productoFiltrado.nombre}</h2>
        <p>Precio: ${productoFiltrado.precio}</p>
        <p>Descripción: {productoFiltrado.descripcion}</p>
      </div>
      <div className="contador">
        <div>
          <Button variant="outline-info" onClick={resta}>-</Button>
          <p id="contadorNum">{contador}</p>
          <Button variant="outline-info" onClick={() => setContador(contador + 1)}>+</Button>
        </div>
        <Button id="botonAgregar" variant="success" onClick={agregarAlCarro}>Agregar al carro</Button>
      </div>

    </>
  )
}

export default ItemDetail 