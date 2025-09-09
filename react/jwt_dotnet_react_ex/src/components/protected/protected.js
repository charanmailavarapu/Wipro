import { useState, useEffect } from "react";
import ProtectedService from "../../services/ProtectedService";

const Protected = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const protectedService = ProtectedService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await protectedService.adminDashBoard();
        setMessage(response.message);
      } catch (err) {
        setError(err.toString());
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Dashboard</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Protected;
