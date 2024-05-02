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
          <h3 className="wisdom">"{info.wisdom}"</h3>
            <h3>Project Description:</h3>
            <p>{info.intro}</p>
            <h3>Work Process and Challenges:</h3>
            <p>{info.what}</p>
            <h3>Results and Future:</h3>
            <p>{info.how}</p>
          </div>
        </Col>
      </Row>
      <Row>
      {info.images.map((image, index) => (
        <Col key={index} className="project-small-image-column">
          <img src={image} alt="" className="project-small-image" />
        </Col>
          ))}
        </Row>
    </div>
    </HelmetProvider>
  );
};

export default ProjectDetails;
