const FIR = require('../models/fir');

const saveFIR = async (formData) => {
  try {
    const {
      policeStation,
      district,
      occurrenceDate,
      reportedDate,
      informerName,
      offenceDescription,
      occurrencePlace,
      criminalName,
      aadharNumber,
    } = formData;

    const newFIR = new FIR({
      policeStation,
      district,
      occurrenceDate,
      reportedDate,
      informerName,
      offenceDescription,
      occurrencePlace,
      criminalName,
      aadharNumber,
    });

    await newFIR.save();
    console.log('FIR data saved successfully');
  } catch (error) {
    console.error('Error saving FIR data:', error);
    throw error; // Propagate error to caller
  }
};

module.exports = { saveFIR };
