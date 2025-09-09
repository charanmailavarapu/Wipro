import axios from 'axios';
import React, { Component, useState } from 'react';
import Menu from '../menu/menu';
import ShowMyData from '../showMyData/showMyData';
import WalletData from '../walletData/walletData';

const SearchCustomerById = () => {

    const [customerResult, setCustomerResult] = useState(null);
    const [customerId, setCustomerId] = useState(0);

    const handleChange = event => {
        setCustomerId(event.target.value)
        // alert(empno);
    }

    const show = () => {
        // alert(userId)
        let custId = parseInt(customerId);
        axios.get(`https://localhost:7063/api/Customers/${custId}`)
            .then((response) => {
                setCustomerResult(response.data)
            }
            )
            .catch((error) => {
                console.error('Search request failed:', error);
            });
    }

    return (
        <div>
            <Menu />
            <label>Customer Id : </label>
            <input type="number" name="customerId"
                value={customerId} onChange={handleChange} /> <br />
            <input type="button" value="Show" onClick={show} />
            <hr />

            {customerResult ? (
                <>
                    Customer Id : <b>{customerResult.custId}</b> <br />
                    Customer Name : <b>{customerResult.custName}</b> <br />
                    City : <b>{customerResult.city}</b> <br />
                    State : <b>{customerResult.state}</b> <br />
                    Email : <b>{customerResult.email}</b> <br />
                    Mobile Number : <b>{customerResult.mobileNo}</b> <br />
                    <WalletData custId={customerResult.custId} />
                </> 
            ) : (
                <p>Please enter a valid customer Id.</p>
            )}
        </div>
    );

}

export default SearchCustomerById;