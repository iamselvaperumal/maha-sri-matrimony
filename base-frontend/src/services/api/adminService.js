import axios from '../axios.config';

const adminService = {
  // Fetch dashboard statistics
  getDashboardStats: async () => {
    try {
      const response = await axios.get('/admin/stats');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Manage user accounts
  manageUsers: async (userId, action) => {
    try {
      const response = await axios.post(`/admin/user/${userId}/manage`, { action });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Review pending profiles
  getPendingProfiles: async () => {
    try {
      const response = await axios.get('/admin/pending-profiles');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default adminService;
