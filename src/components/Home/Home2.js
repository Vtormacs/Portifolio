import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar3.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1  className="heading">
              OI!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              EU SOU
              <strong className="main-name">
                {" "}
                VITOR EDUARDO LOPES FRANCISCO
              </strong>
            </h1>

            <h1 className="heading-name">
              DESENVOLVEDOR <br />
              <span className="blue">FULL STACK</span>
            </h1>

            <p className="home-about-body">
              Atuo como desenvolvedor Full Stack, focado no{" "}
              <b className="blue">back-end</b>, desenvolvendo{" "}
              <b className="blue">APIs REST</b> e sistemas baseados em
              <b className="blue"> microsserviços</b> utilizando{" "}
              <b className="blue">Java</b> e <b className="blue">Spring Boot</b>
              .
              <br />
              <br />
              Tenho experiência com{" "}
              <b className="blue">Spring Cloud, Feign Client, Eureka</b> e{" "}
              <b className="blue">API Gateway</b>, garantindo escalabilidade e
              comunicação eficiente entre serviços.
              <br />
              <br />
              Também trabalho com modelagem de banco de dados usando{" "}
              <b className="blue">MySQL</b> e <b className="blue">PostgreSQL</b>
              , além de implementar autenticação e segurança com{" "}
              <b className="blue">OAuth2</b> e <b className="blue">JWT</b>.
              <br />
              <br />
              No <b className="blue">front-end</b>, utilizo{" "}
              <b className="blue">Angular, TypeScript, JavaScript, HTML</b> e{" "}
              <b className="blue">CSS </b>
              para criar interfaces dinâmicas e responsivas, proporcionando uma
              melhor experiência ao usuário.
              <br />
              <br />
              Sempre buscando aprimorar minhas habilidades e aberto a{" "}
              <b className="blue">novos desafios</b> na área de tecnologia!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se à vontade para <span className="blue">conectar-se </span>
              comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vtormacs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vitor-eduardo-lopes-francisco-1523ab28b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
