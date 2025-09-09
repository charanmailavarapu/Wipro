import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

const WalletData = ({ custId }) => {
  const [wallets, setWallets] = useState([]);
  const [error, setError] = useState(null);

  const fetchWallet = async () => {
    try {
      const response = await axios.get(`https://localhost:7063/api/Wallets/${custId}`);
      setWallets(response.data)
      setError(null);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
      setWallets([]);
      setError("No Wallets found for this customer.")
    }

  };

  useEffect(() => {
    if (custId) {
      fetchWallet();
    } else {
      setWallets([]);
      setError(null);

    }
  }, [custId]);

  return (
    <div>
      {wallets.length > 0 ? (
        <table border="3" align="center">
          <thead>
            <tr>
              <th>CustomerId</th>
              <th>Wallet Id</th>
              <th>Wallet Type</th>
              <th>Wallet Amount</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((item) => (
              <tr key={item.walletId}>
                <td>{item.custId}</td>
                <td>{item.walletId}</td>
                <td>{item.walletType}</td>
                <td>{item.walletAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Wallets found for this customer.</p>
      )}
    </div>
  );
}

export default WalletData;