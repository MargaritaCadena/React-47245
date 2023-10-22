import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function CategoryFilter(props) {
    const [productosFiltrado, setProductosFiltrados] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        let productos = props.productos.filter((producto) => {
            return producto.categoria === categoriaId 
        })
        setProductosFiltrados(productos)
    }, [props.productos, categoriaId]) 

    return (
        <ItemListContainer productos={productosFiltrado}/>
    )
}

export default CategoryFilter