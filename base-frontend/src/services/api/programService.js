import axios from '../axios.config';

const programService = {
  // Retrieve available matrimonial programs
  getPrograms: async () => {
    try {
      const response = await axios.get('/programs');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Enroll in a program
  enrollInProgram: async (programId) => {
    try {
      const response = await axios.post('/programs/enroll', { programId });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Check enrollment status
  getEnrollmentStatus: async () => {
    try {
      const response = await axios.get('/programs/status');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default programService;
