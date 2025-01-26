import { Card, Button } from "react-bootstrap"
import { setearValor }  from '../../assets/utils/funciones.js'
import './CardPizza.css'
import { Link } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img, desc ="" }) => {

    return (
        <Card className="card mt-3" bg="ligth">
            <Card.Header>
                <Card.Img variant="top" src={img} />
                <p className="tituloCard mb-0">Pizza {name}</p>
            </Card.Header>
            <Card.Body>
                <p className="mb-2">🍕 Ingredientes:</p>
                <ul className="m-0 listaIngredientes">
                    {ingredients.map((ingrediente) => 
                        <li key = { ingrediente } > { ingrediente }</li>
                        )}
                </ul>
            </Card.Body>
            <Card.Footer>
                <p className="precio">Precio: ${setearValor(price)}</p>
                <div className="d-flex justify-content-evenly">
                    <Link to='/pizza/001'>
                        <Button variant="outline-dark">Ver más 👀</Button>
                    </Link>
                    <Button variant="dark">Añadir 🛒</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardPizza