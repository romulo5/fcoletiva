import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import landing from './assets/landing.png'


const App = () => {
      const [collapse, setCollapse] = useState(false);
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Fazenda Coletiva</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Login</MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem> */}
                    {/* <MDBNavLink to="#">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem> */}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={landing}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <h2>Fazenda Coletiva</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }

export default App;
