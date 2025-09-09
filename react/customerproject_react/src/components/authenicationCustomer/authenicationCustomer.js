import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthenicationCustomer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: '',
    passCode: ''
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    let user = data.userName;
    let pwd = data.passCode;

    axios
      .get(`https://localhost:7063/login/${user}/${pwd}`)
      .then((response) => {
        const customer = response.data;

        if (customer && customer.custId) {
          localStorage.setItem('custId', customer.custId);
          localStorage.setItem('customer', JSON.stringify(customer));
          navigate(`/searchbyun/${user}`); 
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert('Invalid Credentials');
        } else {
          console.error('Login request failed:', error);
          alert('Something went wrong. Please try again later.');
        }
      });
  };

  return (
    <div>
      <form>
        <label>User Name : </label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={data.userName}
        />{' '}
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="passCode"
          onChange={handleChange}
          value={data.passCode}
        />{' '}
        <br />
        <br />
        <input type="button" value="login" onClick={handleSubmit} />
        &nbsp;&nbsp;&nbsp;
        <a href='/addCustomer' >New User?</a>

      </form>
    </div>
  );
};

export default AuthenicationCustomer;
