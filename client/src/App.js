import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginSignUpPage from "./LoginSignUpPage";
import HomePage from "./HomePage";
import ProjectListPage from "./ProjectListPage";
import ProjectPage from "./ProjectPage";
import ClimbInfo from "./ClimbInfo";
import WorkoutPlansPage from "./WorkoutPlansPage";
import WorkOutSessionPage from "./WorkoutSessionPage";
import ExercisesPage from "./ExercisesPage";

function App() {
  const [user, setUser] = useState(null)
  const [projectList, setProjecList] = useState([])
  const [projectListId, setProjectListId] = useState(null)
  const [projectId, setProjectId] = useState(null)
  const [projectsArr, setProjectsArr] = useState([])
  const [workoutPlans, setWorkoutPlans] = useState([])
  const [workoutSessions, setWorkoutSessions] = useState([])
  const [sessionExercises, setSessionExercises] = useState([])
  
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
            <ProjectPage  projectList={projectList} projectsArr={projectsArr} setProjectsArr={setProjectsArr} projectListId={projectListId} setProjectId={setProjectId}/>
          </Route>
          <Route exact path="/climb/:id">
            <ClimbInfo workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} projectsArr={projectsArr} setProjectsArr={setProjectsArr} projectId={projectId}/>
          </Route>
          <Route exact path="/workoutplans">
            <WorkoutPlansPage workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>
          </Route>
          <Route exact path="/workoutsessions/:id">
            <WorkOutSessionPage workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions}/>
          </Route>
          <Route exact path="/exercises/:id">
            <ExercisesPage sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/>
          </Route>
          <Route exact path="/home">
            <HomePage workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} projectList={projectList} setProjecList={setProjecList} setUser={setUser}/>
          </Route>
          <Route path="/">
            {user ? <HomePage workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} projectList={projectList} setProjecList={setProjecList} setUser={setUser}/> : <LoginSignUpPage setUser={setUser}/>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
