import axios from '../axios.config';

const authService = {
  // Login method
  login: async (credentials) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      // Typical structure includes a token
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Logout method
  logout: () => {
    localStorage.removeItem('token');
  },

  // Check current session status
  getCurrentUser: async () => {
    try {
      const response = await axios.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default authService;
