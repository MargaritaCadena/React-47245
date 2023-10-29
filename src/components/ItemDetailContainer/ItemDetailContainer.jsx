import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer(props) {
    const [productoFiltrado, setProductoFiltrado] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        let producto = props.productos.find((productoArray) => {
            return productoArray.id === parseInt(itemId)
        })
        setProductoFiltrado(producto)
    }, [props.productos])

    return (
        productoFiltrado &&
        <ItemDetail producto={productoFiltrado}/>
    )

}

export default ItemDetailContainer
