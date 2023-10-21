import "./ItemDetailContainer.css"
import {useParams} from "react-router-dom"

function ItemDetailContainer(props) {
    const [productoFiltrado, setProductoFiltrado] = useState(null)
    const {itemId} = useParams()

    let producto = props.productos.find((productoArray) => {
        return productoArray.id === itemId 
    })
    setProductoFiltrado(producto)

    return (
        <div className="detalleProducto">
            <img src={productoFiltrado.imagen}/>
            <h2>Nombre: {productoFiltrado.nombre}</h2>
            <p>Precio: {productoFiltrado.precio}</p>
            <p>Stock: {productoFiltrado.stock}</p>
            <p>Descripción: {productoFiltrado.descripcion}</p>
        </div>
    )

}

export default ItemDetailContainer

/*
function ItemDetailContainer(props) {
    const [productoFiltrado, setProductoFiltrado] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        let producto = props.productos.find((productoArray) => {
            return productoArray.id === itemId
        })
        
        setProductoFiltrado(producto)
    }, [props.productos])

    return (
        <>
            {
                productoFiltrado &&
                <div className="detalleProducto">
                    <img src={productoFiltrado.imagen} />
                    <h2>Nombre: {productoFiltrado.nombre}</h2>
                    <p>Precio: {productoFiltrado.precio}</p>
                    <p>Stock: {productoFiltrado.stock}</p>
                    <p>Descripción: {productoFiltrado.descripcion}</p>
                </div>
            }
        </>
    )
}
*/