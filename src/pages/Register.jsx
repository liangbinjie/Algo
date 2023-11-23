import '../App.css'
import { Container, Card, Form, Alert } from 'react-bootstrap';
import { useRef, useState} from "react"
import { Link } from "react-router-dom";
import { supabase } from "../client";

export default function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const register = (email, password) =>
    supabase.auth.signUp({ email, password });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
          !passwordRef.current?.value ||
          !emailRef.current?.value ||
          !confirmPasswordRef.current?.value
        ) {
          setErrorMsg("Please fill all the fields");
          return;
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          setErrorMsg("Passwords doesn't match");
          return;
        }
        try {
          setErrorMsg("");
          setLoading(true);
          const { data, error } = await register(
            emailRef.current.value,
            passwordRef.current.value
          );
          if (!error && data) {
            setMsg(
              "Registration Successful. Check your email to confirm your account"
            );
          } else {
            setErrorMsg("Error in Creating Account");
          }
        } catch (error) {
          setErrorMsg("Error in Creating Account");
        }
        setLoading(false);
      };


    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Register</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            {errorMsg && (
                                <Alert
                                    variant="danger"
                                    onClose={() => setErrorMsg("")}
                                    dismissible>
                                    {errorMsg}
                                </Alert>
                                )}
                                {msg && (
                                <Alert variant="success" onClose={() => setMsg("")} dismissible>
                                    {msg}
                                </Alert>
                                )}
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
