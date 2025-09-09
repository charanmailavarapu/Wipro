import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../menu/menu';
import ShowCustomer from '../showCustomer/showCustomer';
import ShowMyData from '../showMyData/showMyData';
import WalletData from '../walletData/walletData';

const SearchCustomerByName = () => {
  const { userName } = useParams(); //  get username from route
  const navigate = useNavigate();
  const [customerResult, setCustomerResult] = useState({});
  const [customerName, setCustomerName] = useState(userName || '');

  const handleChange = (event) => {
    setCustomerName(event.target.value);
  };

  const show = () => {
    axios
      .get(`https://localhost:7063/searchbyun/${customerName}`)
      .then((response) => {
        setCustomerResult(response.data);
        navigate(`/searchbyun/${customerName}`);
      })
      .catch((error) => {
        console.error('Search request failed:', error);
      });
  };

  //  Auto-search if opened after login
  useEffect(() => {
    if (userName) {
      axios
        .get(`https://localhost:7063/searchbyun/${userName}`)
        .then((response) => setCustomerResult(response.data));
    }
  }, [userName]);

  return (
    <div>
        <Menu custId={customerResult.custId}/>
      {/* <label>Customer Name : </label>
      <input
        type="text"
        name="customerName"
        value={customerName}
        onChange={handleChange}
      />
      <br />
      <input type="button" value="Show" onClick={show} />
      <hr />
      Customer Id : <b>{customerResult.custId}</b> <br />
      Customer Name : <b>{customerResult.custName}</b> <br />
      City : <b>{customerResult.city}</b> <br />
      State : <b>{customerResult.state}</b> <br />
      Email : <b>{customerResult.email}</b> <br />
      Mobile Number : <b>{customerResult.mobileNo}</b> <br /> */}
      <ShowMyData />
      <WalletData custId={customerResult.custId}/>
    </div>
  );
};

export default SearchCustomerByName;
