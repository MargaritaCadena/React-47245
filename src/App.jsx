import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/notFound'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {
  const [productosApp, setProductos] = useState([])  

  useEffect(() => {
    fetch("/assets/data.json")
      .then(respuesta => respuesta.json())
      .then(productosFetch => {
        setProductos(productosFetch)
      })
      .catch(error =>{console.log(error)})
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer productos={productosApp}/>} />
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer productos={productosApp}/>} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer productos={productosApp}/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
