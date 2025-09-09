import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import Menu from '../menu/menu';
import ShowMyData from '../showMyData/showMyData';

const ShowCustomer = () => {
  const[customers,setCustomersData] = useState([])

 useEffect(() => {
    const fetchData = async () => {
      const response = await 
        axios.get("https://localhost:7063/api/Customers");
        setCustomersData(response.data)
    }
    fetchData();
  },[])
  return (
    <div>
      <Menu />
      {/* <table border="3" align="center">
        <tr>
          <th>CustomerId</th>
          <th>CustomerName</th>
          <th>City</th>
          <th>State</th>
          <th>Email</th>
          <th>Mobile Number</th>
          
        </tr>
        {customers.map((item) => 
        <tr>
          <td>{item.custId}</td>
          <td>{item.custName}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.email}</td>
          <td>{item.mobileNo}</td>
        </tr>
      )}
      </table> */}
      <ShowMyData custId={customers}/>
    </div>
  )
}

export default ShowCustomer;
