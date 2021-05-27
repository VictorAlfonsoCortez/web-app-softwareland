import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase">PROGRAMACION</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">CLASES DE PROGRAMACION</h1>
              <p className="text-muted mb-4 pb-2">La programación es una de las etapas para el desarrollo de un programa o software. La programación especifica la estructura y el comportamiento de un programa verificando si está funcionando adecuadamente o no.</p>
              <a href="#" className="btn btn-warning">Ver mas clases <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/inicio.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;