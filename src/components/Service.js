import React from 'react';
import '../css/service.css';
import efirImage from '../image/efir.jpg';
import viewFirImage from '../image/viewfir.jpg';
import lostArticleImage from '../image/lostarticle.jpg';
import protestImage from '../image/protest.jpg';
import eventImage from '../image/event.jpg';
import unidentifiedBodiesImage from '../image/unidentifiedbodies.jpg';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header-spacing"></div>
      <h2 className="service-heading">Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src={efirImage} alt="e-FIR" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Register e-FIR</h3>
            <p className="service-description">
              Without physically visiting a police station, complainants can register FIRs.
            </p>
            <Link to="/register-fir">
              <button className="service-button">Get Service</button>
            </Link>
          </div>
        </div>

        <div className="service-card">
          <img src={viewFirImage} alt="View/Download FIR" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">View/Download FIR</h3>
            <p className="service-description">
              For the selected police station and time period, a list of all FIR would be available.
            </p>
            <button className="service-button">Get Service</button>
          </div>
        </div>

        <div className="service-card">
          <img src={lostArticleImage} alt="Lost Article" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">View Lost Article</h3>
            <p className="service-description">
              Users would have the access to download any lost articles from a list of all visible lost articles.
            </p>
            <button className="service-button">Get Service</button>
          </div>
        </div>

        <div className="service-card">
          <img src={protestImage} alt="Protest/Strike Request" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Protest/Strike Request</h3>
            <p className="service-description">
              Service is designed to ensure that the protest or strike is conducted in a peaceful and non-disruptive manner, without causing any harm to public property .
            </p>
            <button className="service-button">Get Service</button>
          </div>
        </div>

        <div className="service-card">
          <img src={eventImage} alt="Event Performance Request" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Event Performance Request</h3>
            <p className="service-description">
               This service is designed to ensure public safety and security by allowing the police to monitor and regulate the event or performance.
            </p>
            <button className="service-button">Get Service</button>
          </div>
        </div>

        <div className="service-card">
          <img src={unidentifiedBodiesImage} alt="Unidentified Dead Bodies" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Unidentified Dead Bodies</h3>
            <p className="service-description">
              This service allows users to access comprehensive information of unidentified bodies found within the state.
            </p>
            <button className="service-button">Get Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;