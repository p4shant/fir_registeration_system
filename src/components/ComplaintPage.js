import React from 'react';
import '../css/ComplaintPage.css';

const ComplaintPage = () => {
  const processingFIRs = [
    { name: 'John Doe', date: '2023-05-01', crime: 'Theft' },
    { name: 'Jane Smith', date: '2023-05-03', crime: 'Assault' },
    // Add more processing FIRs here
  ];

  const processedFIRs = [
    { name: 'Michael Johnson', date: '2023-04-15', crime: 'Burglary' },
    { name: 'Emily Davis', date: '2023-04-20', crime: 'Fraud' },
    // Add more processed FIRs here
  ];

  return (
    <div className="complaint-page">
      <h1>Complaints</h1>
      <div className="divider">
        <div className="line"></div>
      </div>
      <div className="fir-container">
        <div className="processing-firs">
          <h2>Processing FIRs</h2>
          <div className="fir-list">
            {processingFIRs.map((fir, index) => (
              <div key={index} className="fir-item">
                <h3>{fir.name}</h3>
                <p>Date: {fir.date}</p>
                <p>Crime: {fir.crime}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="processed-firs">
          <h2>Processed FIRs</h2>
          <div className="fir-list">
            {processedFIRs.map((fir, index) => (
              <div key={index} className="fir-item">
                <h3>{fir.name}</h3>
                <p>Date: {fir.date}</p>
                <p>Crime: {fir.crime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;