import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function HomePage() {
    
    return (
        <>
          <Container>
              <Row>
                  <Col sm={2}></Col>
                  <Col sm={8}>
                  <div style={{marginTop: "10px", textAlign: "center"}}><h2>Home Page</h2></div>
                  
                  </Col>
                  <Col sm={2}></Col>
              </Row>
          </Container>
        </>  
    );
}

export default HomePage;