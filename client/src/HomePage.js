import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from "./NavBar"
import ProjectListCard from './ProjectListCard'
import WorkoutPlanCard from './WorkoutPlanCard'


function HomePage({setUser, projectList, setProjecList, workoutPlans, setWorkoutPlans}) {

  useEffect( () => {
    fetch("/project_lists")
    .then ((res) => res.json())
    .then((projects) => {
      setProjecList(projects) 
    })
  }, [])

  useEffect( () => {
    fetch("/workout_plans")
    .then ((res) => res.json())
    .then((workoutPlansArr) => {
        setWorkoutPlans(workoutPlansArr) 
    })
  }, [])
    
  const allProjectCards = projectList.map((projectListData, index) => (
  index < 4 && <ProjectListCard key ={projectListData.id} projectListData={projectListData} projectList={projectList} setProjecList={setProjecList}/>
  ))

  const allWorkoutPlansCards = workoutPlans.map((workoutPlansData, index) => (
  index < 4 && <WorkoutPlanCard key ={workoutPlansData.id} workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>
  ))
  
  
  return (
      <div> 
        <div className="container-fluid">
          <div className= "row">  
            <NavBar setUser= {setUser}/>
            <h1>HomePage</h1>
           </div> 
           <div className="row">
                <Link className="nav-link active" to="/projectlist">My Tick Lists</Link>
           </div>
           <div className= "row">
             {allProjectCards}
           </div>
           <div className="row">
                <Link className="nav-link active" to="workoutplans">My Workout Plans</Link>
           </div>
           <div className= "row">
             {allWorkoutPlansCards}
           </div>
        </div>
      </div> 
    )
}

export default HomePage