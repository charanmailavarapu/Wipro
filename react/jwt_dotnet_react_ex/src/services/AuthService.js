import axios from "axios";

const API_URL = "https://localhost:7044/api/Auth";

const AuthService = () => {
  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data.token;
    } catch (error) {
      console.error("Login failed", error);
      throw error.response?.data?.message || "Login failed";
    }
  };

  return { login };
};

export default AuthService;
