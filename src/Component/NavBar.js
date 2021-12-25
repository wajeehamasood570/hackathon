import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>

          
               
<p className='topnav'>
                    Shop Now! Upto 30% Off
                </p>
            <section className='bg-nav'>
            
            <Navbar expand="lg">
                <Container>
              
                    <Navbar.Brand className='navheading'>Shopio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='links' href="/home">Home</Nav.Link>
                            <Nav.Link  className='links' href="/about">About</Nav.Link>
                            <Nav.Link className='links' href="/contact">Contact Us</Nav.Link>
                            <Button className='btnstyle' >Log In</Button>
                            <Button className='btnstyle' >Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </section>
        </>
    )
}

export default NavBar
