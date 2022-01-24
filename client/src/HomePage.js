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
  console.log("projectList:", projectList)

  useEffect( () => {
    fetch("/workout_plans")
    .then ((res) => res.json())
    .then((workoutPlansArr) => {
        setWorkoutPlans(workoutPlansArr) 
    })
  }, [])
    
  const allProjectCards = projectList.length > 0 ? projectList.map((projectListData, index) => (
  index < 4 && <ProjectListCard key ={projectListData.id} projectListData={projectListData} projectList={projectList} setProjecList={setProjecList}/>
  )) : null

  const allWorkoutPlansCards = workoutPlans.length > 0 ? workoutPlans.map((workoutPlansData, index) => (
  index < 4 && <WorkoutPlanCard key ={workoutPlansData.id} workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>
  )) : null
  
  
  return (
      <div id="homepage"> 
        <div className="container-fluid">
          <div className= "row">  
            <NavBar setUser= {setUser}/>
            <h1 className="mt-3">HomePage</h1>
           </div> 
           <div className="row">
                <Link className="nav-link active w-50 mb-4 mt-5" to="/projectlist">My Tick Lists</Link>
           </div>
           <div className= "row">
             {allProjectCards}
           </div>
           <div className="row mt-5">
                <Link className="nav-link active w-50 mb-4 mt-5" to="workoutplans">My Workout Plans</Link>
           </div>
           <div className= "row">
             {allWorkoutPlansCards}
           </div>
        </div>
      </div> 
    )
}

export default HomePage