import { Link } from 'react-router-dom'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function NotFound() {
    return (
        <>
        <h2>Página no encontrada.</h2>
        <Link to={<ItemListContainer/>}> Ir a página de inicio </Link>
        </>
    )
}

export default NotFound