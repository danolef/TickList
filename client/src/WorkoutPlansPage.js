import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'
import WorkoutPlanCard from './WorkoutPlanCard'
import AddWorkoutPlan from './AddWorkoutPlan'

function WorkoutPlansPage({workoutPlans, setWorkoutPlans}) {

    const [addForm, setAddForm] = useState(false)
    let history = useHistory()

    useEffect( () => {
        fetch("/workout_plans")
        .then ((res) => res.json())
        .then((workoutPlansArr) => {
            setWorkoutPlans(workoutPlansArr) 
        })
      }, [])

      function handleGoBack() {
        history.push("/home")
      }

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allWorkoutPlansCards = workoutPlans.length > 0 ? workoutPlans.map(workoutPlansData => <WorkoutPlanCard key ={workoutPlansData.id} workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>)
    : null

    return (
        <div id="workoutplan">
            <div className="container-fluid">
                <div className="row bg-white fixed-top">
                    <NavBar/>
                </div>
                <div className="row mt-5">
                    <h1>My Workout Plans</h1>
                    <button type="button" className="btn btn-light col-4 mt-5 mb-4 ms-4" onClick={showAddForm}><strong>+ Add</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddWorkoutPlan workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} addForm={addForm} setAddForm={setAddForm}/> : null}
                </div>
                <div className="row mt-5">
                    {allWorkoutPlansCards}
                </div>
                <button type="button" className="btn btn-light mt-5 mb-5 ms-4" onClick={handleGoBack}><strong>Back</strong></button>
            </div>
        </div>
    )
}

export default WorkoutPlansPage