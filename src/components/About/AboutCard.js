import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou{" "}
            <span className="blue">Vitor Eduardo Lopes Francisco </span>
            de <span className="blue">Foz do Iguaçu, Brasil.</span>
            <br />
            Atualmente, sou estudante de Engenharia de Software na Universidade
            Uniamérica.
            <br />
            <br />
            Além de programar, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
