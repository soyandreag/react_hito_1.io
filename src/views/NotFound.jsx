import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-content-between align-items-center">
            <div className="box d-flex justify-content-center align-items-center mt-2 radius">
                <div className="boxImage"></div>
                <div className="boxInside d-flex flex-column justify-content-center align-items-center">
                    <h1>Ups! algo salió mal.</h1>
                    <h3>La página que buscas no existe.</h3>
                    <Link to="/">
                        <Button variant='dark'>Regresar a Home 🍕</Button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default NotFound