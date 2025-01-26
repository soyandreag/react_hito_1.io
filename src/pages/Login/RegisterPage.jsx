import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./login.css"
import Swal from 'sweetalert2'


const RegisterPage = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!mail || !password || !password2) {
            Swal.fire({
                text: 'Debe rellenar todos los campos.',
                icon: 'error',
            });
            return
        } 
        if (password.length < 6) {
            Swal.fire({
                text: 'La contraseña debe contener 6 caracteres',
                icon: 'error',
            });
            return
        } 
        if (password != password2) {
            Swal.fire({
                text: 'Las contraseñas no coinciden',
                icon: 'error',
            });
            return
        }
            Swal.fire({
                text: 'Registro exitoso',
                icon: 'success',
            });
        }

    return (
            <div className="d-flex flex-column align-content-between align-items-center">
                <div className="box d-flex justify-content-center align-items-center mt-2 radius">
                    <div className="boxImage"></div>
                    <div className="boxInside d-flex flex-column justify-content-center align-items-center">
                    <Form onSubmit={handleSubmit}>
                        <p className="titulo">Registro</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="tuemail@email.com"
                                onChange={(e) => setMail(e.target.value)}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese password"
                                onChange={(e) => setPassword2(e.target.value)}
                                />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Registro
                        </Button>
                    </Form>
                </div>
            </div>
        </div>    
    )
}


export default RegisterPage
