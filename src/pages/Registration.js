import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function RegistrationPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();

        let registrationData = {username, email, password};
        console.warn(registrationData);

        let result = await fetch("http://localhost/react-api/registration.php",{
            method:'POST',
            body:JSON.stringify(registrationData),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        });

        result = await result.json()
        console.warn("result: ", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/home');
    }

    return (
      <>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                <div style={{marginTop: "10px", textAlign: "center"}}><h2>SignUp</h2></div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={submitHandler}>
                        SignUp
                    </Button>
                </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
      </>  
    );
}

export default RegistrationPage;