import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbar
} from "mdbreact";
import logoHorizontal from "../assets/logoHorizontal.png"
const TopBar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Router>
      <MDBNavbar color="success-color-dark" dark expand="md" fixed="top">
        <MDBNavbarBrand href="/">
          <img className="ml-2" src={logoHorizontal}></img>
        </MDBNavbarBrand>
        <MDBNavbarToggler className="mr-2" onClick={() => setCollapse(!collapse)} />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#">Login</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
};
export default TopBar;
