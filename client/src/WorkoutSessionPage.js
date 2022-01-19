import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import WorkoutSessionCard from './WorkoutSessionCard'
import AddWorkoutSession from './AddWorkoutSession'

function WorkOutSessionPage({workoutSessions, setWorkoutSessions}) {

    const [addForm, setAddForm] = useState(false)
    const {id} = useParams()

    console.log(workoutSessions)

    useEffect( () => {
        fetch(`/workout_plans/${id}`)
        .then ((res) => res.json())
        .then((workoutSessionArr) => {
            setWorkoutSessions(workoutSessionArr) 
        })
      }, [])


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
        <div>
            <div className="container">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    {workoutPlanName}
                    <button type="button" className="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddWorkoutSession workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions}/> : null}
                </div>
                <div className="row">
                    {allWorkoutSessionsCards}
                </div>
            
            </div>
        </div>
    )
}

export default WorkOutSessionPage