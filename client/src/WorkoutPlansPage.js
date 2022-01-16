import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import WorkoutPlanCard from './WorkoutPlanCard'
import AddWorkoutPlan from './AddWorkoutPlan'

function WorkoutPlansPage({workoutPlans, setWorkoutPlans}) {

    const [addForm, setAddForm] = useState(false)

    useEffect( () => {
        fetch("/workout_plans")
        .then ((res) => res.json())
        .then((workoutPlansArr) => {
            setWorkoutPlans(workoutPlansArr) 
        })
      }, [])

      console.log(workoutPlans)

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allWorkoutPlansCards = workoutPlans.map(workoutPlansData => <WorkoutPlanCard key ={workoutPlansData.id} workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>)


    return (
        <div>
            <div class="container">
                <div class="row">
                    <NavBar/>
                </div>
                <div class="row">
                    <h1>My Workout Plans</h1>
                    <button type="button" class="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div class="row">
                    {addForm ? <AddWorkoutPlan workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/> : null}
                </div>
                <div class="row">
                    {allWorkoutPlansCards}
                </div>
            
            </div>
        </div>
    )
}

export default WorkoutPlansPage