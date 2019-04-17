import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBFooter
} from "mdbreact";
import TopBar from "./components/TopBar";
import BannerItem from "./components/BannerItem";
import header from "./assets/header-clip.jpg";
import header1 from "./assets/h1-clip.jpg";
import header3 from "./assets/header3-clip.png";
import foto1 from "./assets/Jera.png";
import foto2 from "./assets/Fernando_Marin.jpg.png";
import foto3 from "./assets/Aldo.png";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const sendForm = e => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <header>
        <TopBar />

        {/* Banner  - Carrosel*/}
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={true}
          className="z-depth-1 mt-5"
          style={{ zIndex: 0 }}
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <BannerItem image={header1} />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <BannerItem image={header} />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <BannerItem image={header3} />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </header>

      <main>
        <MDBContainer className="text-center  mt-5 mw-100">
          <MDBRow className="mx-5 mb-5">
            <MDBCol size="sm" className="order-1 mx-5">
              {/* Como Funciona*/}
              <h1 className="pt-5 pt-sm-0 pb-3 ">Como Funciona</h1>
              <MDBRow className="d-flex py-4 mx-5">
                <MDBCol className="p-0">
                  <MDBIcon
                    icon="search-dollar"
                    size="3x"
                    className="cyan-text text-left "
                  />
                </MDBCol>
                <MDBCol className="d-flex align-items-center p-0 col-10  ">
                  <h5 className="w-100">
                    Encontre o insumo que precisa para sua propriedade
                  </h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="d-flex py-5 mx-5">
                <MDBCol className="p-0">
                  <MDBIcon
                    icon="shopping-cart"
                    size="3x"
                    className="cyan-text "
                  />
                </MDBCol>
                <MDBCol className="d-flex align-items-center text-center p-0 col-10  ">
                  <h5 className="w-100">
                    Compre o cupom e garanta o preço promocional
                  </h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="d-flex py-5 mx-5">
                <MDBCol className="p-0">
                  <MDBIcon
                    icon="shopping-cart"
                    size="3x"
                    className="cyan-text "
                  />
                </MDBCol>
                <MDBCol className="d-flex align-items-center p-0 col-10 text-center ">
                  <h5 className="w-100">
                    Retire o produto na revenda ou Receba na Fazenda
                  </h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            {/* Form */}

            <MDBCol size="sm" className="mt-n5 pt-2 order-sm-1 mx-5">
              <MDBCard className="mx-5">
                <MDBCardBody>
                  <MDBCardHeader className="form-header grey lighten-5 rounded mt-n5  z-depth-1">
                    <h5 className="my-3 h5-responsive">
                      Cadastre-se agora e comece a
                      <span style={{ color: "orange" }}> economizar</span> já!
                      <br />
                      <small className="text-muted">
                        Receba ainda um material exclusivo:{" "}
                      </small>
                      <br />
                      <small>
                        8 Dicas para Economizar com Insumos na Propriedade!
                      </small>
                    </h5>
                  </MDBCardHeader>
                  <form>
                    <div className="grey-text ">
                      <MDBInput
                        // icon="user"
                        label="Nome"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />

                      <MDBInput
                        label="Email"
                        // icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />

                      <MDBInput
                        label="Telefone"
                        // icon="phone"
                        group
                        type="text"
                        validate
                      />
                    </div>

                    <div className="text-center py-4 mt-4">
                      <MDBBtn
                        color="amber darken-2"
                        className="mb-3"
                        type="submit"
                        onClick={e => sendForm(e)}
                      >
                        Cadastrar
                        <MDBIcon far icon="paper-plane" className="ml-3" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>

              {/* FORM SEND MODAL  */}
              <MDBModal
                isOpen={isModalOpen}
                toggle={() => setModalOpen(false)}
                size="md"
              >
                <MDBModalHeader
                  className="green darken-3"
                  toggle={() => setModalOpen(false)}
                >
                  <h4 className="text-center text-white">
                    Cadastro Realizado!
                  </h4>
                </MDBModalHeader>
                <MDBModalBody className="text-justify">
                  Enviamos para seu email um documento com 8 dicas para você
                  economizar com insumos na sua propriedade. <br /> <br />
                  Grato por se cadastrar conosco, entraremos em contato
                  novamente em breve com novidades!
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    color="green darken-3"
                    onClick={() => setModalOpen(false)}
                  >
                    Continuar
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBCol>
          </MDBRow>

          {/* Second Row */}
          <MDBRow className="text-center grey lighten-5 px-5 pt-5 w-100">
            {/* Testimonials */}
            <div className="container">
              <h1>Depoimentos</h1>
            </div>
            <MDBRow className="text-center py-5">
              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src={foto1}
                  alt=""
                  className="rounded-circle z-depth-2 img-fluid tes-images"
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Jerônimo Juhei
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Planaltina - DF
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Com o fazenda Coletiva, eu reduzi meus
custos com de insumos em 15%. Tudo isso por que passei a comprar individualmente, mas em escala.
                </p>
              </MDBCol>
              <MDBCol md="4" className="mb-md-0 mb-5 ">
                <img
                  src={foto2}
                  alt=""
                  className="rounded-circle z-depth-2 img-fluid tes-images"
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Fernando Marin
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Alvorada - TO
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Comprei defensivo muito mais barato, sem precisar participar
                  de cooperativa, nada. Sem burocracia, rápido e muito bom para
                  o pequeno produtor.
                </p>
              </MDBCol>
              <MDBCol md="4">
                <img
                  src={foto3}
                  alt=""
                  className="rounded-circle z-depth-2 img-fluid tes-images"
                />
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Aldo Kross
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Agropecuária Kross
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Cortei meu custo médio de venda e vendi muito mais utilizando
                  o sistema de compras coletivas. A iniciativa é incrível e
                  facilita a gestão de estoques da minha revenda. Aldo Kross -
                  Agropecuária Kross
                </p>
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
