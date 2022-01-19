
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import ExerciseTableLine from './ExerciseTableLine'
import ClimbingDrillTableLine from './ClimbingDrillTableLine'
import AddExercise from './AddExercise'
import AddClimbingDrill from './AddClimbingDrill'

function ExercisesPage({sessionExercises, setSessionExercises}) {
  
    const [addForm, setAddForm] = useState(false)
    const [addClimbingForm, setaddClimbingForm] = useState(false)
    const [sessionExercisesArr, setSessionExercisesArr] =useState([])

    const {id} = useParams()
    
    useEffect( () => {
        fetch(`/workout_sessions/${id}`)
        .then ((res) => res.json())
        .then((exercises) => {
            console.log(exercises)
            setSessionExercises([exercises])
            setSessionExercisesArr(exercises.session_exercises) 
        })
    }, [])

    console.log(sessionExercisesArr)

    function showAddClimbingForm() {
        setaddClimbingForm(!addClimbingForm)
    }
    
    function showAddForm() {
        setAddForm(!addForm)
    }
    
    console.log(sessionExercises)
    
    const climbingDrill= sessionExercises.length > 0  ? sessionExercises[0].session_climbing_drills?.map(climbingDrill => <ClimbingDrillTableLine key={climbingDrill.id} climbingDrill={climbingDrill} sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/>)
    : null

    const exercises= sessionExercises.length > 0 ? sessionExercisesArr.map(exercise => <ExerciseTableLine key={exercise.id} exercise={exercise} sessionExercisesArr={sessionExercisesArr} setSessionExercisesArr={setSessionExercisesArr}/>)
        : null

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <NavBar/>
                </div>   
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h2>Fitness Exercises</h2>
                    <button type="button" onClick={showAddForm} className="btn btn-secondary">Add Exercise</button>
                    {addForm ? <AddExercise sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/> : null}
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Sets</th>
                        <th scope="col">Notes</th>
                        </tr>
                    </thead>
                        {exercises}
                    </table>
                </div> 
                <div className="row">
                    <h2>Climbing Drills</h2>
                    <button type="button" onClick={showAddClimbingForm} className="btn btn-secondary">Add Climbing Drill</button>
                    {addClimbingForm ? <AddClimbingDrill sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/> : null}
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Climb Type</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Climb Attributes</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Sets</th>
                        <th scope="col">Notes</th>
                        </tr>
                    </thead>
                        {climbingDrill}
                    </table>
                </div> 
            </div>
        </div>
    )
}


export default ExercisesPage