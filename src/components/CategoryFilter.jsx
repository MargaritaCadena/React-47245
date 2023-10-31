import ItemListContainer from "./ItemListContainer/ItemListContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function CategoryFilter() {
  const [productosFiltrado, setProductosFiltrados] = useState([])
  const { categoriaId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'), where('categoria', '==', categoriaId))

    getDocs(q)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })

        setProductosFiltrados(productos)
      })
      .catch(error => { console.log(error) })
  }, [categoriaId])

  return (
    productosFiltrado.length > 0 ?
      <ItemListContainer productos={productosFiltrado} /> :
      <h2>Categoria no encontrada</h2>
  )
}

export default CategoryFilter