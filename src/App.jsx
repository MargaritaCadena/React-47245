import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/notFound'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore'
import CategoryFilter from './components/CategoryFilter'
import CartContextComponent from './context/CartContextComponent'
import Checkout from './components/Checkout/Checkout'


function App() {
  const [productosApp, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()

    getDocs(collection(db, 'items'))
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        
        setProductos(productos)
      })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <CartContextComponent>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer productos={productosApp} />} />
          <Route exact path="/categoria/:categoriaId" element={<CategoryFilter productos={productosApp} />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer productos={productosApp} />} />
          <Route exact path="/cart" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextComponent>
  )
}

export default App
