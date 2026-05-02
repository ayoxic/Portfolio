import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GPS Treasure Hunt"
              description="I recently developed a GPS-based treasure hunt web application that combines real-time geolocation, persistent state management, and backend data handling. The system tracks user position using the browser’s geolocation API and calculates distance dynamically to guide users toward hidden locations. To prevent exposing sensitive data, all secret coordinates and hints were moved from the frontend to Firebase Realtime Database and accessed securely after authentication. I implemented a persistent countdown mechanism that continues even after page refresh by storing timestamps in localStorage, along with a state restoration system that preserves user progress (success or failure) across sessions. The project also includes a dynamic unlocking sequence, progress tracking UI, and visual reward popups, making it both a technical and user-centered application."
              ghLink="https://github.com/ayoxic/gps-treasure-hunt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Player Chemistry Analyzer"
              description="I developed a computer vision pipeline that analyzes football match videos to estimate player chemistry. The system uses YOLOv8 for player and ball detection, applies tracking to maintain player identities, and models interactions through both pass-based and proximity-based approaches. These signals are combined into a hybrid score to produce a ranked view of player relationships, with results visualized through an interactive dashboard."
              ghLink="https://github.com/ayoxic/player-chemistry"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SQL Data Cleaning Project"
              description="Cleaned and transformed a real-world dataset using SQL. The project included removing duplicates, handling null values, standardizing inconsistent data, and formatting date fields. Built a clean dataset ready for analysis by applying structured data cleaning steps. Demonstrates skills in SQL, data preprocessing, and data quality management."
              ghLink="https://github.com/ayoxic/sql-data-cleaning-project"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Educational Webpage for INSEA"
              description="This project is a modern institutional website developed for INSEA, designed to provide a seamless digital experience for students, faculty, and visitors. It combines an elegant, user-friendly interface with a robust backend system that supports academic management, including programs, schedules, and student information. The platform is fully bilingual (French and Arabic), optimized for performance, and structured for scalability and easy maintenance. Beyond its informational role, the website enhances communication, showcases the institute’s academic excellence, and serves as a dynamic hub for educational resources and institutional activities."
              ghLink="https://github.com/ayoxic/educational-webpage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
