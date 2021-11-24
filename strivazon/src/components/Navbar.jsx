import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbarpage = (props) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Jobify</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
        <Nav.Link href="#features"></Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Navbarpage;
