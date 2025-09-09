import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login/login";
import Protected from "./components/protected/protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on page reload
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Protected />
      )}
    </div>
  );
}

export default App;
