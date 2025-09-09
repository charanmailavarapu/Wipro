import logo from './logo.svg';
import './App.css';
import CreateAccount from './components/createAccount/createAccount';
import SearchAccount from './components/searchAccount/searchAccount';
import ShowAccount from './components/showAccount/showAccount';
import Deposit from './components/deposit/deposit';
import Withdraw from './components/withdraw/withdraw';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Menu from './components/menu/menu';
import Login from './components/login/login'; // Assuming you have a Login component
import RegisterAccount from './components/registerAccount/registerAccount'; // Assuming you have a RegisterAccount component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registerAccount" element={<RegisterAccount />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/searchAccount" element={<SearchAccount />} />
          <Route path="/showAccount" element={<ShowAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
