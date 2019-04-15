import React from "react";
import { MDBContainer, MDBFooter, MDBRow, MDBCol } from "mdbreact";
import logo from "../assets/logo.png";
import face from "../assets/face.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import "../App.css";

const Footer = () => {
  return (
    <MDBFooter color="green darken-2" className="font-smallpt-4 z-depth-3">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="footer pt-5">
          <MDBCol size="sm" className="text-center">
            <h2 className="title pb-5">Siga-nos nas Redes Sociais </h2>
            <a href="http://www.instagram.com/fazendacoletiva">
              <img className="insta " src={insta} alt="instagram" />
            </a>
            <a href="https://www.twitter.com/fazendacoletiva">
              <img className="twitter mx-3" src={twitter} alt="twitter" />
            </a>
            <a href="http://www.facebook.com/fazendacoletiva">
              <img className="face" src={face} alt="facebook" />
            </a>
          </MDBCol>
          <MDBCol size="sm" className="text-right">
            <a href="http://www.fazendacoletiva.com">
              <img src={logo} alt="logo" className="img-fluid logo" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.fazendacoletiva.com"> FazendaColetiva.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
