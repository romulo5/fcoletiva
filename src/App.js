import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import header from './assets/header-clip.jpg';
import header1 from './assets/h1-clip.jpg';
import header2 from './assets/header2-clip.jpg';
import logo from './assets/logo.png';

const App = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      {/* NavBar */}
      <header>
        <Router>
          <MDBNavbar color="green darken-2" dark expand="md" fixed="top">
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
        {/* Hero */}
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={true}
          className="z-depth-1 mt-5"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <div className="view">
                <img
                  className="d-block w-100"
                  src={header1}
                  alt="First slide"
                />
                <div className="mask ">
                  <div className="container mw-100 h-100">
                    <div className="row  h-100 d-flex">
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <img
                          src={logo}
                          className=" img-fluid d-inline w-50 text-center"
                          alt="logo"
                        />
                      </div>
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <h1 className="white-text h1-responsive text-center ">
                          Sua nova maneira de comprar insumos para sua fazenda.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={header}
                  alt="Second slide"
                />
                <div className="mask ">
                  <div className="container mw-100 h-100">
                    <div className="row  h-100 d-flex">
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <img
                          src={logo}
                          className=" img-fluid d-inline w-50 text-center"
                          alt="logo"
                        />
                      </div>
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <h1 className="white-text h1-responsive text-center ">
                          Sua nova maneira de comprar insumos para sua fazenda.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={header2}
                  alt="Third slide"
                />
                <div className="mask ">
                  <div className="container mw-100 h-100">
                    <div className="row  h-100 d-flex">
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <img
                          src={logo}
                          className=" img-fluid d-inline w-50 text-center"
                          alt="logo"
                        />
                      </div>
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <h1 className="white-text h1-responsive text-center ">
                          Sua nova maneira de comprar insumos para sua fazenda.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

        {/* <MDBView src=}>
          <MDBMask className="flex-center flex-column text-white text-center">
            <h2>Fazenda Coletiva</h2>
            <h5>
              It will always stay visible on the top, even when you scroll down
            </h5>
            <br />
            <p>
              Full page intro with background image will be always displayed in
              full screen mode, regardless of device{' '}
            </p>
          </MDBMask>
        </MDBView> */}
      </header>

      <main>
        <MDBContainer className="text-center my-5">
          <p align="justify">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </MDBContainer>
      </main>
    </div>
  );
};

export default App;
