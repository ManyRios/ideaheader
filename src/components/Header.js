
import { useState } from 'react'
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import styled from "styled-components";
import { menu, start, creators, build, community, media, logo  } from "./config";
import { Icon } from './icons'


const NavStyle = styled.nav`
  font-size: 18px;
  background: var(--idea-color);
  
  .nav-link{
    color: lightgray;
    text-transform: capitalize;
  }

  .nav-link:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg{
    width:  40px;
    height: 40px;
  }

  .title{
    font-size: 15px;
    font-weight: bold;
  }

  .description{
    font-size: 10px;
    font-weight: bold;
  }
  .wallet{
    color: lightgray;
  }

  .wallet:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }

`;

const Header = () => {

  const [show, setShow] = useState(menu.map( x => false ));

  const showDropdown = ( val, i ) =>{
    const newArr = [...show];
    newArr[i] = val
    newArr.map( (bol, idx) => {
      if(newArr[idx] && idx != i ){
        newArr[idx] = false
      }
    })
    setShow(newArr);     
  }

  const links = [start, creators, build, community, media]

  return (
    <NavStyle>
    <Container> 
      <Navbar
        collapseOnSelect
        expand="lg"
        variant=""
        bg="transparent"
        className="d-flex"
      >
        {
          <Navbar.Brand href="#">
            <img
              alt=""
              src={`${logo.url}`}
              width="26"
              height="40"
              className="d-inline-block  logo img-fluid"
            />{" "}
            Ideamarket
          </Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex">
       
          <Nav className="ml-auto">   
            {


              menu.map((val, i ) => (

                <NavDropdown 
      
                onMouseEnter={ e => showDropdown(true, i) } 
                onMouseLeave={ e => showDropdown(false, i)}
                show={show[i]}
                key = {i}
                title={val} 
                id="nav-dropdown"
                className="px-3"        
                >
                  
                {links[i].map(({name, icons, url, desc }, i ) => (

                    <NavDropdown.Item 
                    key = {i}
                    title={name} 
                    id="collasible-nav-dropdown" 
                    onClick={e => showDropdown(false, i)}  
                    href={url}     
                    >
                      <div className="d-flex align-items-center">
                        <div className="col-md-3 text-center ">
                          <Icon name={icons} />
                        </div>
                        <div className="col-md-9 mt-3 px-2 align-middle">
                          <h5 className="m-0 ">{name}</h5>
                          <p><small className=" description text-muted m-0">{desc}</small></p>
                        </div>                
                      </div>                  
                    </NavDropdown.Item>                   
                  )
                )}
              </NavDropdown>      
              ))
          }
          </Nav>
        </Navbar.Collapse>
        <div className="wallet">
           No Wallet
        </div>
      </Navbar> 
      </Container> 
    </NavStyle>
  );


};

export default Header;


/*


                
                */ 