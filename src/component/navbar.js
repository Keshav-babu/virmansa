import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown } from 'react-bootstrap'; 


const NavbarComp=()=>{
    return <>
      <Navbar collapseOnSelect expand="lg" variant="light">  
        <Container>  
          <Navbar.Brand href="#home"></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="#features">
                <img src='https://virmansha.com/assets/img/fb.png'/>
              </Nav.Link>  
              
              <Nav.Link href="#features">
                <img src='https://virmansha.com/assets/img/insta.png'/>
              </Nav.Link>  

              <Nav.Link href="#features">
                <img src='https://virmansha.com/assets/img/linkedin.png'/>
              </Nav.Link>  
            </Nav>  
            
             <Nav> 
              <Nav.Link href="#memes">  
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
                </div>
              </Nav.Link>  
            </Nav> 
             <NavDropdown id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1"><h6>Home</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2"><h6>About</h6></NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3"><h6>Products</h6></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><h6>Impact</h6></NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown> 
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>
}
export default NavbarComp;