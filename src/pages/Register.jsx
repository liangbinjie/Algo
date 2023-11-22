import '../App.css'
import { Container, Card, Form } from 'react-bootstrap';

export default function Register() {

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Register</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                            <div className="text-center mt-2">
                                <button className='btn btn-bnw w-50' type='submit'>Register</button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                </div>
            </Container>
        </>
    )
};
