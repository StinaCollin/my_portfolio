import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Importera useParams för att hämta id från URL:en
import { dataportfolio, projectinfo } from "../../content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Modal, ModalBody } from "reactstrap";
import "./ProjectDetailsStyle.css";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = dataportfolio[id];
    const info = projectinfo[id];
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState(null);
  
const handleImageClick = (image, alt) => {
    setSelectedImage(image);
    setSelectedAlt(alt);
    setShowModal(true);
  };

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
          <h2 className="wisdom">"{info.wisdom}" / Stina Collin</h2>
            <h3>Project Description:</h3>
            <p>{info.intro}</p>
            <h3>Work Process and Challenges:</h3>
            <p>{info.what}</p>
            <h3>Results and Future:</h3>
            <p>{info.how}</p>
            <h3>Links to this project:</h3>
            <ul>
            {info.links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </Col>
      </Row>
      <Row>
      <h3 className="project-images-header">Project Detail Images</h3>
          {info.images.map((image, index) => (
            <Col
              key={index}
              className="project-small-image-column"
              onClick={() => handleImageClick(image.src, image.alt)}
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.alt}
                className="project-small-image"
              />
            </Col>
          ))}
        </Row>
      </div>
      {/* Modal for displaying enlarged image */}
      <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
        <ModalBody>
          <p>{selectedAlt}</p>
          <img src={selectedImage} alt={selectedAlt} className="enlarged-image" />
        </ModalBody>
      </Modal>
    </HelmetProvider>
  );
};

export default ProjectDetails;
