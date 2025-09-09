import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShowMyData from '../showMyData/showMyData';

const Menu = ({custId}) => {
  return (
    <div>
      <p>Welcome Customer..</p>
      {/* <ShowMyData /> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/addCustomer">Create Account</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/searchCustomerById">Search Account By Id</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Link to="/searchCustomerByUserName">Search Customer By Name</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      <Link to="/showMyData">Show My Data</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">Logout</Link>
      
    </div>
  )
}

export default Menu;