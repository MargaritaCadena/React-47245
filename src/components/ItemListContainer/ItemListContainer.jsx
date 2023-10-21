import "./ItemListContainer.css"
import Card from "../Card/Card"
import { Link } from 'react-router-dom'


function ItemListContainer(props) {

    return (
        <>
            <div className="catalogo">
                {props.productos.map((producto) => {
                    return <Link
                        to={`/item/${producto.id}`}
                        key={producto.id}
                    >
                        <Card
                            imagen={producto.imagen}
                            nombre={producto.nombre}
                            precio={producto.precio}
                        />
                    </Link>
                })}
            </div>
        </>
    )
}

export default ItemListContainer