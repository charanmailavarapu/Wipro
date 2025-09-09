import axios from 'axios';
import React, {Component, useState} from 'react';
import {useNavigate} from "react-router-dom";


const ApplyLeave = () => {

  const navigate = useNavigate();
  const [result, setResult] = useState('');
  const [data, setData] = useState({
    empId : 0,
    leaveStartDate : '',
    leaveEndDate : '',
    leaveReason : ''
  })
  
  const handleChange = (event) => {
    setData({
      ...data,[event.target.name] : event.target.value
    })
  }

  const handleSubmit = () => {
    let eno = parseInt(localStorage.getItem("empId"));

    axios.post("https://localhost:7238/api/LeaveHistories", {
      empId: eno,
      leaveStartDate : data.leaveStartDate,
      leaveEndDate : data.leaveEndDate,
      leaveReason : data.leaveReason
    }).then(resp => {
      setResult(resp.data);
      console.log(resp.data);
    })

    // Redirect to dashboard after 5 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
  }

  return (
    <div>

      <label>Leave Start Date : </label>
      <input type = "date" name = "leaveStartDate"
          value ={data.leaveStartDate} onChange={handleChange} /> <br/>
      <label>Leave End Date : </label>
      <input type = "date" name = "leaveEndDate" 
        value={data.leaveEndDate} onChange = {handleChange} /> <br/>
      
      <label>Leave Reason : </label>
      <input type ="text" name = "leaveReason" 
        value={data.leaveReason} onChange = {handleChange} /> <br/>
      
      <button onClick={handleSubmit}>Apply Leave</button>
      <hr/>
      {result}

    </div>
  )
}

export default ApplyLeave;