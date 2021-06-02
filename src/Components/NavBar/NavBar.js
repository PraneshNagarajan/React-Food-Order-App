
import { Navbar, Badge,Container, Nav, Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <Container fluid className="p-0">
      <Navbar bg="primary" variant="dark" className="col-md-12">
        <Navbar.Brand className="col-md-2">
        <img src="https://img.icons8.com/fluent/40/000000/waiter.png" className="mx-3" />
            ReactFood </Navbar.Brand>
        <Nav className="col-md-4">
          <Nav.Item>
            <Nav.Link active>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
         
          </Nav.Item>
        </Nav>
        <Navbar.Brand className="col-md-2 offset-1">
        <img className="ml-5 mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oIbrjiUXheYI1jpf9t9z7ip5Vep4NQ37kg&usqp=CAU" alt="user image" width="40px"  style={{borderRadius: `50%`, border: `1px solid white`}}/>
        Pranesh Nagarajan
        </Navbar.Brand>
       <Nav className="col-md-3">
       <Button  className="ml-5 mr-4" variant="outline-light"><FontAwesomeIcon icon={faCartPlus} className="mr-1"></FontAwesomeIcon>Orders<Badge className="ml-1" pill variant="warning">4</Badge></Button>
       <Button  variant="outline-light">Logout <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></Button>
       </Nav>
      </Navbar>
    </Container>
  );
};
export default NavBar;
