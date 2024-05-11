import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../header/logoshmodelmodel.png'; // Replace with the path to your logo image

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        
        <Nav className="me-auto ">
          <Nav.Link href="../pages/Store/Store.js">STORE</Nav.Link>
          <Nav.Link href="#features">DESIGN</Nav.Link>
          {/* <Navbar.Brand href="#home"> <img src={logo} alt="Logo" width="50" height="50" /></Navbar.Brand> */}
          <Nav.Link href="#pricing">NEWS</Nav.Link>
          <Nav.Link href="#pricing">MUSIC</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;