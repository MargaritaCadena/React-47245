import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [productoFiltrado, setProductoFiltrado] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const db = getFirestore()

    getDoc(doc(db, 'items', itemId))
      .then((doc) => {
        setProductoFiltrado({ id: doc.id, ...doc.data() })
      })
      .catch(error => { console.log(error) })
  }, [itemId])

  return (
    productoFiltrado ?
      <ItemDetail producto={productoFiltrado} /> :
      <h2>Producto no encontrado</h2>
  )

}

export default ItemDetailContainer
