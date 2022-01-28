import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsApple, BsSearch, BsBagFill } from 'react-icons/bs';
import "./Header.css";
import { Container, Nav } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import SecHeader from './SecHeader';
import Search from './Search';

export default function Header() {
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
       <BsApple  />
      </Navbar.Brand>
      <Nav fill className="me-auto" >
      <Nav.Item >
          <Nav.Link href = "store">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "mac">Mac</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "ipad">iPad</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "iphone">iPhone</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "watch">Watch</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "airpods">Airpods</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "tv">TV&Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "only">Only on Apple</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "accessories">Accessories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "support">Support</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "search"><BsSearch /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href = "bag"><BsBagFill /></Nav.Link>
          </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
           <SecHeader/>
           <Search /> 
        </div>
    )
}
