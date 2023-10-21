import "./Card.css"

function Card(props) {

    return (
        <>
            <div className="card">
                <img src={props.imagen}
                    width="95"
                    height="95" />
                <h2>{props.nombre}</h2>
                <p>{props.precio}</p>
            </div>
        </>
    )
}

export default Card