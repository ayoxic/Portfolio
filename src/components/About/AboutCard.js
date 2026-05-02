import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Janina Ayoub</span>{" "}
            from <span className="purple">Casablanca, Morocco</span>.
            <br />
            I’m currently a student at {" "}
            <span className="purple">INSEA</span> IN{" "}
            <span className="purple">Rabat</span>.
            <br />I hold a certification(IMSc) in{" "}
            <span className="purple">Data Engineering</span> from{" "}
            <span className="purple">DataCamp</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just do it!"{" "}
          </p>
          <footer className="blockquote-footer">Janina</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
