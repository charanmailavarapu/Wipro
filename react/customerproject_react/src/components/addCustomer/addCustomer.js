import axios from 'axios';
import React, {Component, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
      const[result,setResult] = useState('')
      const navigate = useNavigate();
      const [data, setData] = useState({
        custId : 0,
        custName : '',
        custUserName : '',
        custPassword : '',
        city : '',
        state:'',
        email:'',
        mobileNo:''

    })

    const addCustomer = () => {
      axios.post("https://localhost:7063/api/Customers",data)
          .then(resp => {
          //  alert(resp.data);
          setResult("Customer created successfully!");
          setTimeout (()=> {
            navigate("/");
          },3000);
          console.log(resp.data);
        })
        .catch(err => {
            console.error("Error creating customer:", err.response?.data || err.message);
            setResult("Failed to create customer. Check console.")
        })

    }

    const handleChange = event => 
    {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

      return (
        <div>
            <label>Customer Id : </label>
            <input type="number" name="custId" 
                value={data.custId} onChange={handleChange} /> <br/><br/> 
            <label>Customer Name : </label>
            <input type="text" name="custName" 
                value={data.custName} onChange={handleChange} /> <br/><br/> 
            <label>Customer User Name : </label>
            <input type="text" name="custUserName" 
                value={data.custUserName} onChange={handleChange} /> <br/><br/> 
            <label>Customer Password : </label>
            <input type="password" name="custPassword" 
                value={data.custPassword} onChange={handleChange} /> <br/><br/> 
            <label>City : </label>
            <input type="text" name="city" 
                value={data.city} onChange={handleChange} /> <br/><br/> 
            <label>State : </label>
            <input type="text" name="state" 
                value={data.state} onChange={handleChange} /> <br/><br/> 
            <label>Email ID : </label>
            <input type="text" name="email" 
                value={data.email} onChange={handleChange} /> <br/><br/> 
            <label>Mobile Number : </label>
            <input type="text" name="mobileNo"
                value={data.mobileNo} onChange={handleChange} /> <br/>
            <input type="button" value="Create Account" onClick={addCustomer} />
            &nbsp;&nbsp;
            <a href="/authenicationCustomer" >Return to Login Page</a>

            <br/>
            <b>{result}</b>
    </div>
  )

}

export default AddCustomer;
