import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSignUpPage from "./LoginSignUpPage";
import HomePage from "./HomePage";
import ProjectListPage from "./ProjectListPage";
import ProjectPage from "./ProjectPage";

function App() {
  const [user, setUser] = useState(null)
  console.log(user)
  
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
          <Route exact path="/projectlist">
            <ProjectListPage />
          </Route>
          <Route exact path="/projectlists/:id">
            <ProjectPage />
          </Route>
          <Route exact path="/home">
            <HomePage setUser={setUser}/>
          </Route>
          <Route path="/">
            {/* <LoginSignUpPage/> */}
            {user ? <HomePage setUser={setUser}/> : <LoginSignUpPage setUser={setUser}/>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
