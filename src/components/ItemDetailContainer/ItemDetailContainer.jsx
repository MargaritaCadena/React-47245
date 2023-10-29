import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"

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
        productoFiltrado ?
        <ItemDetail producto={productoFiltrado}/> :
        <h2>Producto no encontrado</h2>
    )

}

export default ItemDetailContainer
