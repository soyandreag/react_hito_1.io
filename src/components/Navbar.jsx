import { Container, Button, Navbar as NavbarAlias, Nav} from 'react-bootstrap';
import { setearValor} from '../assets/utils/funciones' 
/**Función creada, no ejecutable aún**/

const Navbar = () => {
    const total = 25000
    const token = false
    const botones = (token ?
        (<>
        <Button className="me-2" variant="outline-ligth">🔓 Profile</Button>
        <Button className="me-2" variant="outline-ligth">🔒 Logout</Button>
        </>):
        (<>
        <Button className="me-2" variant="outline-light">🔐 Login</Button>
        <Button className="me-2" variant="outline-light">🔐 Register</Button>
        </>)
    )

    return (
        <>
        <NavbarAlias expand="lg" bg="dark" className='justify-content-between' data-bs-theme="dark">
            <Container>
                <NavbarAlias.Brand href="#home">¡Pizzeria Mamma Mia!</NavbarAlias.Brand>
                <NavbarAlias.Toggle aria-controls="basic-navbar-nav"/>
                <NavbarAlias.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Button className="me-2" variant="outline-light">🍕 Home</Button>
                {botones}
                </Nav>
                <Nav className='justify-content-end'>
                <Button variant="outline-light">🛒Total: ${total.toLocaleString()}</Button>
                </Nav>
                </NavbarAlias.Collapse>
            </Container>
        </NavbarAlias>
    </>
  )
}
    
export default Navbar;