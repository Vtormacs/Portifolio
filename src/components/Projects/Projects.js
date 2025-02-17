import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {
  DiPython,
  DiJava,
  DiPostgresql,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiSpringboot,
} from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus Recentes <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiJava />
                  <SiSpringboot />
                  <DiPostgresql />
                  <DiAngularSimple />
                </div>
              }
              isBlog={false}
              title="Spotted"
              description="Spotted é uma plataforma social pseudoanônima onde nenhum usúario sabe quem publicou posts ou comentários. Por trás da aplicação, estamos treinando uma inteligência artificial para validar os posts publicados, garantindo segurança e controle."
              ghLink="https://github.com/Dor-de-Cabeca-Team/Spotted-Front-End"
              demoLink="http://54.232.114.161/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiJava />
                  <SiSpringboot />
                  <DiPostgresql />
                </div>
              }
              isBlog={false}
              title="MicroWorkPay"
              description="MicroWorkPay é um sistema baseado em arquitetura de microsserviços, projetado para gerenciar trabalhadores, usuários, folhas de pagamento e controle de autenticação/segurança. Ele utiliza tecnologias modernas como Spring Boot, Spring Cloud, OAuth2 e JWT, proporcionando uma solução simples, escalável e modular."
              ghLink="https://github.com/Vtormacs/MicroWorkPay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <DiJava />
                  <SiSpringboot />
                  <DiPostgresql />
                </div>
              }
              isBlog={false}
              title="Eventicket-Back-End"
              description="Eventick eté uma aplicação para gerenciar eventos e vendas de ingressos, desenvolvida com Spring Boot. O objetivo é permitir a criação, atualização, busca e exclusão de eventos, ingressos, usuários, endereços e categorias, oferecendo uma experiência completa para administração de eventos e compra de ingressos."
              ghLink="https://github.com/Vtormacs/Eventicket-Back-End"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
