import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import WorkoutSessionCard from './WorkoutSessionCard'
import AddWorkoutSession from './AddWorkoutSession'

function WorkOutSessionPage({workoutSessions, setWorkoutSessions}) {

    const [addForm, setAddForm] = useState(false)
    const {id} = useParams()

    useEffect( () => {
        fetch("/workout_sessions")
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

    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    <h1>Workout Sessions</h1>
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