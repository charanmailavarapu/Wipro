import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = "https://localhost:7044/api/Protected";

const ProtectedService = () => {
  const adminDashBoard = async () => {
    try {
      const response = await axios.get(API_URL, { headers: AuthHeader() });
      return response.data;
    } catch (error) {
      console.error("Admin Authentication failed", error);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        throw new Error("Unauthorized. Please log in again.");
      }

      throw new Error(error.response?.data?.message || "Request failed");
    }
  };

  return { adminDashBoard };
};

export default ProtectedService;
