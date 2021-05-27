import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Plantillas", desc : "Tenemos mas de 100 plantillas que puedes utilizar para uso personal y como tambien comercial." },
    { title : "Hosting", desc : "Tenemos nuestro propio hosting donde podras subir tus practicas y verlas en tiempo real." },
    { title : "Dominios", desc : "Te ofrecemos muchos nombres de dominios que podras usar para uso comercial." },
    { title : "Certificaciones", desc : "Te ofreceremos certificados a nuestros cursos" },
    { title : "Implementación", desc : "Se puede implementar para uso comercial." },
    { title : "Logos", desc : "Te ofrecemos logos total mente gratis al inscribirte a nuestro curso." },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Servicios</span></h3>
              <p className="text-muted">A continuacion te mostraremos nuestros servicios que ofrecemos al cursar nuestros cursos.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;