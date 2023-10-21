import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget() {
    return (
        <Button variant="outline-info">
            <img
                alt=""
                src="/assets/images/carrito.png"
                width="25"
                height="25"
            />{" "}
            <Badge bg="success">9</Badge>
        </Button>
    )
}

export default CartWidget