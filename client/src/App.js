import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSignUpPage from "./LoginSignUpPage";

function App() {
  const [user, setUser] = useState(null)

  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <LoginSignUpPage setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
