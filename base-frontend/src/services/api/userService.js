import axios from '../axios.config';

const userService = {
  // Fetch user profiles
  getProfiles: async (params = {}) => {
    try {
      const response = await axios.get('/profiles', { params });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Update profile details
  updateProfile: async (profileData) => {
    try {
      const response = await axios.put('/profiles/update', profileData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Other endpoints can be added here
};

export default userService;
