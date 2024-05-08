import React, { useState } from 'react';
import axios from 'axios';
import '../css/registerfir.css';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Update this with your backend server URL
});

const Registerfir = () => {
  const [formData, setFormData] = useState({
    policeStation: '',
    district: '',
    occurrenceDate: '',
    reportedDate: '',
    informerName: '',
    offenceDescription: '',
    occurrencePlace: '',
    criminalName: '',
    aadharNumber: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post('/api/registerfir', formData); // Use api instance with baseURL
      console.log('FIR registered successfully:', response.data);
      alert('FIR registered successfully');
  
      // Clear form after successful submission
      setFormData({
        policeStation: '',
        district: '',
        occurrenceDate: '',
        reportedDate: '',
        informerName: '',
        offenceDescription: '',
        occurrencePlace: '',
        criminalName: '',
        aadharNumber: '',
      });
    } catch (error) {
      console.error('Failed to register FIR:', error);
      alert('Failed to register FIR');
    }
  };
  

  return (
    <div className="registerfir-container">
      <h2>First Information of a Cognizable Crime Reported under Section 154</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="policeStation">Police Station</label>
          <input
            type="text"
            id="policeStation"
            placeholder="Enter Police Station"
            value={formData.policeStation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="district">District</label>
          <input
            type="text"
            id="district"
            placeholder="Enter District"
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="occurrenceDate">Date and hour of Occurrence</label>
          <input
            type="datetime-local"
            id="occurrenceDate"
            value={formData.occurrenceDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reportedDate">Date and hour when reported</label>
          <input
            type="datetime-local"
            id="reportedDate"
            value={formData.reportedDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="informerName">Name and residence of informer and complainant</label>
          <textarea
            id="informerName"
            rows="3"
            placeholder="Enter Name and Residence"
            value={formData.informerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="offenceDescription">Brief description of offence (with section) and of property carried off, if any</label>
          <textarea
            id="offenceDescription"
            rows="4"
            placeholder="Enter Offence Description"
            value={formData.offenceDescription}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="occurrencePlace">Place of occurrence and distance and direction from the Police Station</label>
          <textarea
            id="occurrencePlace"
            rows="3"
            placeholder="Enter Place of Occurrence"
            value={formData.occurrencePlace}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="criminalName">Name & Address of the Criminal</label>
          <input
            type="text"
            id="criminalName"
            placeholder="Enter Criminal Name and Address"
            value={formData.criminalName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharNumber">Aadhar Number of User</label>
          <input
            type="text"
            id="aadharNumber"
            placeholder="Enter Aadhar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registerfir;
