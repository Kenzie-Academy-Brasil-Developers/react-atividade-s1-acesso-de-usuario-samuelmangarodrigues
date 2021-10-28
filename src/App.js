import "./App.css";
import { useState } from "react";
import RestrictPage from "./components/RestrictPage";
function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const user = "Samuel";
  const Login = () => {
    setIsLogedIn(true);
  };
  const Logout = () => {
    setIsLogedIn(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <RestrictPage
          Login={Login}
          isLogedIn={isLogedIn}
          user={user}
          Logout={Logout}
        />
      </header>
    </div>
  );
}

export default App;
