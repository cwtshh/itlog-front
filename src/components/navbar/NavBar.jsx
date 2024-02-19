import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <Navbar className='bg-body-tertiary justify-content-between' bg="dark" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand>ITLog</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>Inicio</Nav.Link>
                <Nav.Link>Chamados Registrados</Nav.Link>
            </Nav>

            <Button>Area Restrita</Button>
        </Container>

    </Navbar>
  )
}

export default NavBar