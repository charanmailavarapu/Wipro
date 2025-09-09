import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeShow = () => {
  const navigate = useNavigate();
  const [employs, setEmployData] = useState([])
  const [error, setError] = useState(null);

  const show = (eid, mid) => {
    localStorage.setItem("empId", eid);
    localStorage.setItem("mgrId", mid);
    navigate("/dashBoard");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await
          axios.get("https://localhost:7238/api/Employees");
        setEmployData(response.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Failed to load employees.Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table border="3" align="center">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Manager Id</th>
            <th>Leave Avail</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Show Info</th>
          </tr>
        </thead>
        {employs.map((item) =>
          <tbody>
            <tr key={item.empId}>
              <td>{item.empId}</td>
              <td>{item.employName}</td>
              <td>{item.mgrId}</td>
              <td>{item.leaveAvail}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <input type="button" value="Show" onClick={() => show(item.empId, item.mgrId)} />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

export default EmployeeShow;