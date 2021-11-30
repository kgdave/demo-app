import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logOut() {
        localStorage.clear();
        navigate('/');
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {
                localStorage.getItem('user-info') ?
                <>
                    <Nav className="me-auto">
                    <Link to="/home" className='nav-link'>Home</Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                    <NavDropdown title={user && user.username} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </>
                :
                <>
                    <Nav>
                    <Link to="/" className='nav-link'>Login</Link>
                    <Link to="/registration" className='nav-link'>SignUp</Link>
                    </Nav>
                </>
            }
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;