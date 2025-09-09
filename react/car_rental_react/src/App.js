import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Protected from './components/Vehicle';
import Customer from './components/Customer';

function App() {
  return (
    <div className="App">
      <Login /> <br/><hr/>
      <Protected /> <br/><hr/>
      <Customer />
    </div>
  );
}

export default App;
