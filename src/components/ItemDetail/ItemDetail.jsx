import { CartContext } from "../../context/CartContextComponent"
import "./ItemDetail.css"
import { useContext, useState } from "react"


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
      newCart[itemIndex].total += contador
    }
    else {
      newCart.push({ producto: { ...productoFiltrado }, total: contador })
    }

    setCart(newCart)
  }

  return (
    <>
      <div className="detalleProducto">
        <img src={productoFiltrado.imagen} />
        <h2>Nombre: {productoFiltrado.nombre}</h2>
        <p>Precio: {productoFiltrado.precio}</p>
        <p>Descripción: {productoFiltrado.descripcion}</p>
      </div>
      <div>
        <div>
          <button onClick={resta}>-</button>
          <p>{contador}</p>
          <button onClick={() => setContador(contador + 1)}>+</button>
        </div>
        <button onClick={agregarAlCarro}>Agregar al carro</button>
      </div>

    </>
  )
}

export default ItemDetail 