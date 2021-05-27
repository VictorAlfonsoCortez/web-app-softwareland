import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Acerca de Nosotros</span></h3>
              <p className="text-muted">Somos una escuela virtual compromotida para la educación.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Al aprender programación puedes implementarlo para uso personal pero tambien para sus clientes.</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Misión</h6>
                <p className="text-muted font-weight-light">A través de un entorno de aprendizaje virtual facilita el acceso a una  educación para el desarrollo.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Visión</h6>
                <p className="text-muted font-weight-light">Es reconocida por la visión de desarrollo sustentable de su modelo educativo para  entornos virtuales de aprendizaje.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;