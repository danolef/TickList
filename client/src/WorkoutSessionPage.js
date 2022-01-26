import { useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import NavBar from './NavBar'
import WorkoutSessionCard from './WorkoutSessionCard'
import AddWorkoutSession from './AddWorkoutSession'

function WorkOutSessionPage({workoutSessions, setWorkoutSessions}) {

    const [addForm, setAddForm] = useState(false)
    const {id} = useParams()
    let history = useHistory()

    useEffect( () => {
        fetch(`/workout_plans/${id}`)
        .then ((res) => res.json())
        .then((workoutSessionArr) => {
            setWorkoutSessions(workoutSessionArr) 
        })
      }, [])

      function handleGoBack() {
        // history.push("/workoutplans")
        history.goBack()
      }

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allWorkoutSessionsCards = workoutSessions.length > 0 ? workoutSessions.map(workoutSessionData => <WorkoutSessionCard key ={workoutSessionData.id} workoutSessionData={workoutSessionData} workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions}/>)
    : null
    console.log(workoutSessions)

    const workoutPlanName = workoutSessions.length > 0 ? 
            <>
            <h1>{workoutSessions[0].workout_plan.name}</h1>
            </>
            : 
            <>
            <h1>Add Your First Session</h1>
            </>

    return (
        <div id="workoutsession">
            <div className="container-fluid">
                <div className="row bg-white fixed-top">
                    <NavBar/>
                </div>
                <div className="row mt-5">
                    {workoutPlanName}
                    <button type="button" className="btn btn-light col-3 mt-5 mb-4 ms-4" onClick={showAddForm}><strong>+ Add</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddWorkoutSession workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions} addForm={addForm} setAddForm={setAddForm}/> : null}
                </div>
                <div className="row mt-4">
                    {allWorkoutSessionsCards}
                </div>
                <button type="button" className="btn btn-light mt-5 mb-5 ms-4" onClick={handleGoBack}><strong>Back</strong></button>
            </div>
        </div>
    )
}

export default WorkOutSessionPage