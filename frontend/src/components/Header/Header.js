import React from 'react';
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    function navigation() {
        navigate('/');
    }

    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Link to='/'>
                    <Navbar.Brand>NoteZipper</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto'>
                        <Form inline>
                            <FormControl type="text" placeholder='Search' className='mr-sm-2' />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/mynotes">
                            <Link to='/mynotes'>
                                My Notes
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Shreyan Sanyal" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => {
                                localStorage.removeItem("userInfo");
                                navigation();
                            }}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header