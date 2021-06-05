import { Navbar, Badge, Container, Nav, Button,Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const [cartSize, setSize] = useState(0)
  useEffect(()=>{
    setSize(props.size)
  },[props.size])
  return (
      <Navbar fixed="top" collapseOnSelect bg="primary" variant="dark" expand="md">
              <Container fluid>
              <Navbar.Brand>
          <img
            src="https://img.icons8.com/fluent/40/000000/waiter.png"
            className="mr-2"
          />
          ReactMeals{" "}

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="#Navbar-collapse"></Navbar.Toggle>
        <Navbar.Collapse id="Navbar-collapse">
        <Nav className="ml-1 mr-auto">
         <Nav.Item>
            <Nav.Link active>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-1 mr-4">
        <Nav.Item >
          <Nav.Link active disabled>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oIbrjiUXheYI1jpf9t9z7ip5Vep4NQ37kg&usqp=CAU"
            alt="user image"
            width="40px"
            style={{ borderRadius: `50%`, border: `2px solid white` }}
          ></img>
          <span className="ml-2 h6">Pranesh Nagarajan</span>
          </Nav.Link>
          </Nav.Item>
       </Nav>
      <Nav>
        <Nav.Item className="m-1">
        <Button
        className="w-100"
              variant="outline-light"
              onClick={props.showFunction}
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                className="mr-1"
              ></FontAwesomeIcon>
              Orders
              <Badge className="ml-1" pill variant="warning">
                {cartSize}
              </Badge>
            </Button>
        </Nav.Item>
        <Nav.Item className="m-1">
          
        <Button 
            className="w-100"
            variant="outline-light">
              Logout <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
            </Button>
          
        </Nav.Item>
</Nav>
        </Navbar.Collapse>
        
              </Container>
        </Navbar>
  );
};
export default NavBar;
