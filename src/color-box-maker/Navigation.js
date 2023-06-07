import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({display}) {
  const handleClick = (e)=>{
    if(e.target.innerText === "Color-Box"){
      display(true);
    }else{
      display(false);
    }
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="#color-box" onClick={handleClick}>Color-Box</Nav.Link>
            <Nav.Link href="#to-do" onClick={handleClick}>Todo-App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
