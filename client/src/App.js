import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSignUpPage from "./LoginSignUpPage";
import HomePage from "./HomePage";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/">
            {/* <LoginSignUpPage/> */}
            {user ? <HomePage/> : <LoginSignUpPage setUser={setUser}/>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
