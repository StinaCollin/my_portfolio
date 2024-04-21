import React from "react";
import { useParams } from "react-router-dom"; // Importera useParams för att hämta id från URL:en
import { dataportfolio, projectinfo } from "../../content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { Row, Col } from "reactstrap";

const ProjectDetails = () => {
  const { id } = useParams(); // Hämta id från URL:en

  const project = dataportfolio[id]; // Hämta projektdata baserat på id
  const info = projectinfo[id]; // Hämta projektinfo baserat på id

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Details</title>
        <meta name="description" content="Details about specific project" />
      </Helmet>
    <div className="project-details-container">
     <h2 className="project-details-description">{project.description}</h2>
      <Row>
        <Col lg="6"  className="project-img-column">
          <img src={project.img} alt="" className="project-details-image" />
        </Col>
        <Col lg="6">
          <div className="project-details-content">
            <h3>What:</h3>
            <p>{info.what}</p>
            <h3>Where:</h3>
            <p>{info.where}</p>
            <h3>How:</h3>
            <p>{info.how}</p>
          </div>
        </Col>
      </Row>
    </div>
    </HelmetProvider>
  );
};

export default ProjectDetails;
