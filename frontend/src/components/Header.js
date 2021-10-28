import React from 'react';
import '../style/Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'

function Header () {

    return(
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>ZAKARIA BELGHIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#About">À propos </Nav.Link>
                            <Nav.Link href="#Projects">Projets</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col>
                        <img></img>
                    </Col>
                    <Col className="header">
                        <h1 className="header__title"> Bonjour ! </h1>
                        <p className="header__text"> Je suis Zakaria, Développeur Web  <br />
                            Spécialisé en Javascript, Node, React.js et Java. </p> 
                    </Col>
                </Row>
            </Container>
        
        </div>


    )
};

export default Header;