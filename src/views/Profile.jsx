import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Profile = () => {
    return (
        <div className="d-flex flex-column align-content-between align-items-center">
            <div className="box d-flex justify-content-center align-items-center mt-2 radius">
                <div className="boxImage"></div>
                <div className="boxInside d-flex flex-column justify-content-center align-items-center">
                    <div className="boxProfile"></div>
                    <p>Usuario: <strong>tu.email.aqui@gmail.com</strong></p>
                    <Link to='/'>
                        <Button variant="dark">Cerrar sesión</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile