import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './Mynavbar'

function Mynavbar(){
    const expand='md'
    return(
        <>
        <Navbar  className="bg-body-tertiary mb-3">
          <Container className='py-3' style={{alignItems:'center'}}>
            <Navbar.Brand href="#" >
             <div style={{display:'flex' ,flexDirection:'row',textAlign:'center'}}>
             <img style={{width:'33px' ,margin:'0px 5px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw8U_WVJOmCPqPVU1LwrvDslNFFZIDCeX2VHy9f2N4Q&s" alt="" />
                <h6 style={{fontSize:'23px',marginTop:'5px 0px'}}>QuickStart</h6>
             </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className='nav-link active' style={{color:'#77b6ca'}} to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/about'>About</NavLink>
                <NavLink className='nav-link' to='/feature'>Feature</NavLink>
                <NavLink className='nav-link' to='/price'>Price</NavLink>
                <NavLink className='nav-link' to='/service'>Services</NavLink>
                <NavLink className='nav-link' to='/contact'>Contact</NavLink>

                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Dropdown1</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Dropdown2
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Dropdown3
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button style={{backgroundColor:'#388da8',borderRadius:'20px',border:'1px solid #77b6ca',padding:'8px 16px'}}>Get Started</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    )
}
export default Mynavbar