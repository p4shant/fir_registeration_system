// src/components/Status.js
import React from 'react';
import '../css/status.css';

const Status = () => {
  const firStatus = [
    { date: '2023-05-01', status: 'FIR registered', description: 'Initial FIR registered for the case.' },
    { date: '2023-05-05', status: 'Investigation started', description: 'Police started the investigation process.' },
    { date: '2023-05-10', status: 'Suspect identified', description: 'A suspect has been identified in the case.' },
    { date: '2023-05-15', status: 'Suspect arrested', description: 'The suspect has been arrested by the police.' },
    // Add more status updates here
  ];

  return (
    <div className="status-container">
      <h1>FIR Status</h1>
      <div className="timeline">
        <div className="line"></div>
        {firStatus.map((status, index) => (
          <div key={index} className={`status-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content">
              <h3>{status.status}</h3>
              <p>{status.date}</p>
              <p>{status.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;