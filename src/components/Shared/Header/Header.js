import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import "./Header.css";
// import physical from "../../../images/about/wheelchair-move-solid.svg";

const Header = () => {
  const {user,logOut} = useAuth();

  // NavLink active style
  let activeStyle = {
    // color: "DodgerBlue",
    color: "yellow",
    fontWeight: "bold"
  };
  return (
    // NavLink start
    <Navbar className='header-bg sticky-top bg-dark' expand="lg">
      <Container className='container'>
        <Navbar.Brand >
          <div className='header-left'>
            <h3 className='physical-therapy'>Physical Therapy</h3>
          </div>

        </Navbar.Brand>
        <Navbar.Toggle className='hamburger-menu' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/home'
            >Home</NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/services'
            >Services</NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/about'
            >About</NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/login'
            >Login</NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              className='navLink' to='/contact'
            >Contact</NavLink>
            
            

          </Nav>
         <div className='header-name-logout'>
         <span >
            
            {  user?.displayName}
  
            </span>
  
          <span>
          { user.displayName && <li  onClick={logOut}>LogOut</li>}
          </span>
  
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;