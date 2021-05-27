import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Caracteristicas",
      child : [
          { title : "PHP", link : "/" },
          { title : "JAVASCRIPT", link : "/" },
          { title : "JAVA", link : "/" },
          { title : "C++", link : "/" }
      ]
    },
    { id : 2, title : "Acerca de nosotros",
      child : [
          { title : "Contactanos", link : "/" },
          { title : "Politicas de provacidad", link : "/" },
          { title : "Comentarios", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">HolaMundoProgramacion@email.com</p>
                <h6 className="text-muted font-weight-normal">+52 443-125-1548</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Nuestra Direccion</h6>
                <p className="text-muted f-14">#23 Las Tarascas</p>
                <h6 className="text-muted pb-2">Email: HR_HolaProgramacion@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Derechos reservados. Diseñado por WEB APP</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;