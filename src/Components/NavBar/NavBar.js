
import { Navbar, Container, Nav, Button, Badge, BadgeProps} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import user from '../../images/29833.jpg'
const NavBar = () => {
  return (
    <Container fluid>
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
        <img className="ms-5 me-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oIbrjiUXheYI1jpf9t9z7ip5Vep4NQ37kg&usqp=CAU" alt="user image" width="40px"  style={{borderRadius: `50%`, border: `1px solid white`}}/>
        Pranesh Nagarajan
        </Navbar.Brand>
       <Nav className="col-md-3">
       <Button  className="ms-5 me-3"variant="outline-light"><FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon>Orders <span className="badge rounded-pill bg-warning">5</span></Button>
       <Button  variant="outline-light">Logout <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></Button>
       </Nav>
      </Navbar>
    </Container>
  );
};
export default NavBar;
