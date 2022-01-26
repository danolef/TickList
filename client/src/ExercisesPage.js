
import {useParams, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import ExerciseTableLine from './ExerciseTableLine'
import ClimbingDrillTableLine from './ClimbingDrillTableLine'
import AddExercise from './AddExercise'
import AddClimbingDrill from './AddClimbingDrill'

function ExercisesPage({sessionExercises, setSessionExercises}) {
  
    const [addForm, setAddForm] = useState(false)
    const [addClimbingForm, setaddClimbingForm] = useState(false)
    const [sessionExercisesArr, setSessionExercisesArr] = useState([])
    const [sessionClimbingDrillArr, setSessionClimbingDrillArr] = useState([])

    const {id} = useParams()
    let history = useHistory()

    useEffect( () => {
        fetch(`/workout_sessions/${id}`)
        .then ((res) => res.json())
        .then((exercises) => {
            setSessionExercises([exercises])
            setSessionExercisesArr(exercises.session_exercises)
            setSessionClimbingDrillArr(exercises.session_climbing_drills) 
        })
    }, [])

    function handleGoBack() {
        history.goBack()
      }

    function showAddClimbingForm() {
        setaddClimbingForm(!addClimbingForm)
    }
    
    function showAddForm() {
        setAddForm(!addForm)
    }
        
    const climbingDrill= sessionExercises.length > 0  ? sessionClimbingDrillArr?.map(climbingDrill => <ClimbingDrillTableLine key={climbingDrill.id} climbingDrill={climbingDrill} sessionClimbingDrillArr={sessionClimbingDrillArr} setSessionClimbingDrillArr={setSessionClimbingDrillArr}/>)
    : null

    const exercises= sessionExercises.length > 0 ? sessionExercisesArr.map(exercise => <ExerciseTableLine key={exercise.id} exercise={exercise} sessionExercisesArr={sessionExercisesArr} setSessionExercisesArr={setSessionExercisesArr}/>)
        : null

    return (
        <div id="exercisepage">
            <div className="container-fluid">
                <div className="row bg-white fixed-top">
                    <NavBar/>
                </div>   
            </div>
                <div className="row mt-5 ms-2">
                    <h1>Fitness Exercises</h1>
                </div> 
                <div className="row ms-2">
                    <button type="button" onClick={showAddForm} className="btn btn-light col-3 mt-5 mb-4 ms-4">Add Exercise</button>
                    {addForm ? <AddExercise sessionExercisesArr={sessionExercisesArr} setSessionExercisesArr={setSessionExercisesArr} addForm={addForm} setAddForm={setAddForm}/> : null}
                </div>
                <div className="row">
                <table className="table table-sm table-hover m-5 bg-white">
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
                <div className="row ms-2">
                    <h1>Climbing Drills</h1>
                    <button type="button" onClick={showAddClimbingForm} className="btn btn-light col-3 mt-5 mb-4 ms-4">Add Climbing Drill</button>
                    {addClimbingForm ? <AddClimbingDrill sessionClimbingDrillArr={sessionClimbingDrillArr} setSessionClimbingDrillArr={setSessionClimbingDrillArr} addClimbingForm={addClimbingForm} setaddClimbingForm={setaddClimbingForm}/> : null}
                <table className="table table-sm table-hover m-5 bg-white">
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
                <button type="button" className="btn btn-light mt-5 mb-5 ms-4" onClick={handleGoBack}><strong>Back</strong></button>
            </div>
    )
}


export default ExercisesPage