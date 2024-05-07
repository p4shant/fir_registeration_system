import React from 'react';
import '../css/registerfir.css';

const Registerfir = () => {
  return (
    <div className="registerfir-container">
      <h2>First Information of a Cognizable Crime Reported under Section 154</h2>
      <form>
        <div className="form-group">
          <label htmlFor="policeStation">Police Station</label>
          <input type="text" id="policeStation" placeholder="Enter Police Station" />
        </div>

        <div className="form-group">
          <label htmlFor="district">District</label>
          <input type="text" id="district" placeholder="Enter District" />
        </div>

        <div className="form-group">
          <label htmlFor="occurrenceDate">Date and hour of Occurrence</label>
          <input type="datetime-local" id="occurrenceDate" />
        </div>

        <div className="form-group">
          <label htmlFor="reportedDate">Date and hour when reported</label>
          <input type="datetime-local" id="reportedDate" />
        </div>

        <div className="form-group">
          <label htmlFor="informerName">Name and residence of informer and complainant</label>
          <textarea id="informerName" rows="3" placeholder="Enter Name and Residence"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="offenceDescription">Brief description of offence (with section) and of property carried off, if any</label>
          <textarea id="offenceDescription" rows="4" placeholder="Enter Offence Description"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="occurrencePlace">Place of occurrence and distance and direction from the Police Station</label>
          <textarea id="occurrencePlace" rows="3" placeholder="Enter Place of Occurrence"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="criminalName">Name & Address of the Criminal</label>
          <input type="text" id="criminalName" placeholder="Enter Criminal Name and Address" />
        </div>

        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number of User</label>
          <input type="text" id="aadharNumber" placeholder="Enter Aadhar Number" />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Registerfir;