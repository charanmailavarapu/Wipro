import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: '',
    passCode: '',
    confirmPassCode: ''
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
    let confirmPwd = data.confirmPassCode;

    if (pwd !== confirmPwd) {
      alert("Passwords do not match");
      return;
    }

    // POST request with username and password in the URL
    axios.post(`https://localhost:7180/register/${user}/${pwd}`)
      .then(resp => {
        alert(resp.data); // Will show "Account Created Successfully..."
        navigate("/");
      })
      .catch(err => {
        console.error(err);
        alert("Error creating account");
      });
  };

  return (
    <div>
      <form>
        <label>User Name: </label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={data.userName}
        /> <br/><br/>

        <label>Password: </label>
        <input
          type="password"
          name="passCode"
          onChange={handleChange}
          value={data.passCode}
        /> <br/><br/>

        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassCode"
          onChange={handleChange}
          value={data.confirmPassCode}
        /> <br/><br/>

        <input type="button" value="Create Account" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default RegisterAccount;