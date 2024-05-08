import React, { useState, useEffect } from 'react';
import '../css/status.css';

const Status = () => {
  const [firStatus, setFirStatus] = useState([]);

  // Simulated hardcoded data (initial state)
  const initialStatus = [
    { date: '2023-05-01', status: 'FIR registered', description: 'Initial FIR registered for the case.' },
    { date: '2023-05-05', status: 'Investigation started', description: 'Police started the investigation process.' },
    { date: '2023-05-10', status: 'Suspect identified', description: 'A suspect has been identified in the case.' },
    { date: '2023-05-15', status: 'Suspect arrested', description: 'The suspect has been arrested by the police.' },
  ];

  useEffect(() => {
    // Simulate fetching new status updates after a delay (simulating asynchronous update)
    const simulateUpdate = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

      const updatedStatus = [
        ...initialStatus,
        { date: '2023-05-20', status: 'Case closed', description: 'Case has been successfully closed.' },
      ];

      setFirStatus(updatedStatus);
    };

    simulateUpdate();
  }, []); // Run once on component mount

  return (
    <div className="status-container">
      <h1>FIR Status</h1>
      <div className="timeline">
        <div className="line" style={{ height: `${firStatus.length * 100}px` }}></div>
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
