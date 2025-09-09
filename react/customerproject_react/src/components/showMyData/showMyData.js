import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';

const ShowMyData = ({custId}) => {
  const[customer,setCustomer] = useState(null);

 useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const custId = localStorage.getItem("custId");
        if(!custId) {
          console.error("No customer ID found in localStorage");
          return;
        }

        const response = await axios.get(`https://localhost:7063/api/Customers/${custId}`);
        setCustomer(response.data)
      }catch(error) {
        console.error("Error fetching customer:", error);
      } 
    };
    fetchCustomer();
  },[]);

  if(!customer) {
    return <p style={{ textAlign: "center" }}>Loading Customer Data...</p>
  }
  return (
    <div>
      <table border="3" align="center">
        <thead>
        <tr>
          <th>CustomerId</th>
          <th>CustomerName</th>
          <th>City</th>
          <th>State</th>
          <th>Email</th>
          <th>Mobile Number</th>
        </tr> 
        </thead>
        <tbody>
        <tr>
          <td>{customer.custId}</td>
          <td>{customer.custName}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>{customer.email}</td>
          <td>{customer.mobileNo}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowMyData;
