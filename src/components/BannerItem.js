import React from "react";
import logo from '../assets/logo.png'
import './bannerItem.css';

const BannerItem = ({image}) =>{
    return (
        <div className="view banner">
                <img
                  className="d-block w-100 bannerImg"
                  src={image}
                  alt="First slide"
                />
                <div className="mask ">
                  <div className="container mw-100 h-100">
                    <div className="row  h-100 d-flex">
                      <div className="col-6 pt-5 text-center align-self-center  ">
                        <img
                          src={logo}
                          className="  logoPrincipal d-inline w-50 text-center"
                          alt="logo"
                        />
                      </div>
                      <div className="col-6 pt-5 text-center align-self-center ">
                        <h1 className="white-text h1-responsive text-center slogan">
                          O melhor jeito de comprar insumos para sua propriedade
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
}
export default BannerItem;