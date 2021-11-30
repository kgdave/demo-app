import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();

        let loginData = {email, password};
        console.warn(loginData);

        let result = await fetch("http://localhost/react-api/login.php",{
            method:'POST',
            body:JSON.stringify(loginData),
            headers:{
                "Access-Control-Allow-Origin": "*",
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
                  <div style={{marginTop: "10px", textAlign: "center"}}><h2>Login</h2></div>
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      
                      <Button variant="primary" type="button" onClick={submitHandler}>
                          Login
                      </Button>
                  </Form>
                  </Col>
                  <Col sm={2}></Col>
              </Row>
          </Container>
        </>  
    );
}

export default LoginPage;