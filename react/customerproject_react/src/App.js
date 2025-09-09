import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowCustomer from './components/showCustomer/showCustomer';
import SearchAccount from './components/searchCustomerById/searchCustomerById';
import AddCustomer from './components/addCustomer/addCustomer';
import AuthenicationCustomer from './components/authenicationCustomer/authenicationCustomer';
import Menu from './components/menu/menu';
import SearchCustomerById from './components/searchCustomerById/searchCustomerById';
import SearchCustomerByName from './components/searchCustomerByUserName/searchCustomerByUserName';
import ShowMyData from './components/showMyData/showMyData';
import WalletData from './components/walletData/walletData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenicationCustomer />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/walletData" element={<WalletData />} />
        <Route path="/showMyData" element={<ShowMyData />} />
        <Route path="/showCustomer" element={<ShowCustomer />} />
        <Route path="/searchCustomerById" element={<SearchCustomerById />} />
        <Route path="/searchbyun/:userName" element={<SearchCustomerByName />} />
        <Route path="/searchCustomerByUserName" element={<SearchCustomerByName />} />
        <Route path="/addCustomer" element={<AddCustomer />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
