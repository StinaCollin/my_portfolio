import React from "react";
import { useParams } from "react-router-dom"; // Importera useParams för att hämta id från URL:en
import { dataportfolio, projectinfo } from "../../content_option";
import "./style.css";
import { Row, Col } from "reactstrap";

const ProjectDetails = () => {
  const { id } = useParams(); // Hämta id från URL:en

  const project = dataportfolio[id]; // Hämta projektdata baserat på id
  const info = projectinfo[id]; // Hämta projektinfo baserat på id

  return (
    <div className="project-details-container">
     <h2 className="project-details-description">{project.description}</h2>
      <Row>
        <Col lg="6"  className="project-img-column">
          <img src={project.img} alt="" className="project-details-image" />
        </Col>
        <Col lg="6">
          <div className="project-details-content">
            <h3>What I did:</h3>
            <p>{info.what}</p>
            <h3>Where it was:</h3>
            <p>{info.where}</p>
            <h3>How I made all:</h3>
            <p>{info.how}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
