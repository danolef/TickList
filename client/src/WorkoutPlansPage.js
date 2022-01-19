import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import WorkoutPlanCard from './WorkoutPlanCard'
import AddWorkoutPlan from './AddWorkoutPlan'

function WorkoutPlansPage({workoutPlans, setWorkoutPlans}) {

    const [addForm, setAddForm] = useState(false)

    // useEffect( () => {
    //     fetch("/workout_plans")
    //     .then ((res) => res.json())
    //     .then((workoutPlansArr) => {
    //         setWorkoutPlans(workoutPlansArr) 
    //     })
    //   }, [])

      console.log(workoutPlans)


      function showAddForm() {
          setAddForm(!addForm)
      }

    const allWorkoutPlansCards = workoutPlans.length > 0 ? workoutPlans.map(workoutPlansData => <WorkoutPlanCard key ={workoutPlansData.id} workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>)
    : null

    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    <h1>My Workout Plans</h1>
                    <button type="button" className="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddWorkoutPlan workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/> : null}
                </div>
                <div className="row">
                    {allWorkoutPlansCards}
                </div>
            
            </div>
        </div>
    )
}

export default WorkoutPlansPage