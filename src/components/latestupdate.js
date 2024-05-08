// src/components/Latestupdate.js
import React from 'react';
import '../css/latestupdate.css';
import update1 from '../image/update1.jpg';
import update2 from '../image/update2.jpg';
import update3 from '../image/update3.jpg';

const Latestupdate = () => {
  const updates = [
    {
      image: update1,
      description: "Without Investigation, How Police Can Claim That Allegations Are False\": Delhi Court Orders FIR On Allegation Of Killing Burqa Wearing Women During Riots",
    },
    {
      image: update2,
      description: "Husband Of Property Owner Not Stranger; Has Locus Standi To File Criminal Complaint Against Trespasser: Jammu & Kashmir & Ladakh High Court",
    },
    {
      image: update3,
      description: "[S.60 Copyright Act] Inquiry Into 'Groundless Legal Proceedings' Can't Conclusively Determine Question Of Copyright Infringement: Bombay High Court",
    },
  ];

  return (
    <div className="latestupdate-container">
      <h2>Latest Updates</h2>
      <div className="update-boxes">
        {updates.map((update, index) => (
          <div key={index} className="update-box">
            <div className="image-container">
              <img src={update.image} alt={`Update ${index + 1}`} />
            </div>
            <div className="update-description">
              <p>{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestupdate;