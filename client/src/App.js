import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSignUpPage from "./LoginSignUpPage";
import HomePage from "./HomePage";
import ProjectListPage from "./ProjectListPage";
import ProjectPage from "./ProjectPage";
import ClimbInfo from "./ClimbInfo";

function App() {
  const [user, setUser] = useState(null)
  const [projectList, setProjecList] = useState([])
  const [projectListId, setProjectListId] = useState(null)
  const [projectId, setProjectId] = useState(null)
  const [projectsArr, setProjectsArr] = useState([])

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
            <ProjectListPage projectList={projectList} setProjecList={setProjecList} setProjectListId={setProjectListId}/>
          </Route>
          <Route exact path="/projectlists/:id">
            <ProjectPage  projectsArr={projectsArr} setProjectsArr={setProjectsArr} projectListId={projectListId} setProjectId={setProjectId}/>
          </Route>
          <Route exact path="/climb/:id">
            <ClimbInfo projectsArr={projectsArr} setProjectsArr={setProjectsArr} projectId={projectId}/>
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
