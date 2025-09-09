import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <p>Welcome to Menu Page</p>
      <Link to="/createAccount">Create Account</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/searchAccount">Search Account</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/showAccount">Show Account</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/deposit">Deposit</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/withdraw">Withdraw</Link>
    </div>
  )
}

export default Menu;