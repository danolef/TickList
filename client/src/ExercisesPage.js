
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

    const {id} = useParams()
    
    useEffect( () => {
        fetch(`/workout_sessions/${id}`)
        .then ((res) => res.json())
        .then((exercises) => {
            setSessionExercises([exercises]) 
        })
    }, [])

    // console.log(sessionExercises)

    function showAddClimbingForm() {
        setaddClimbingForm(!addClimbingForm)
    }
    
    function showAddForm() {
        setAddForm(!addForm)
    }
    //   function handleAddResourceSubmit(e) {
    //     e.preventDefault();
    //     fetch(`/projects/${id}/resources`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(resourceFormData)
    //     })
    //     .then((res) => {
    //       if (res.ok) {
    //         res.json()
    //         .then((newResource) => {
    //             console.log(newResource)
    //             // setWorkoutPlans([newWorkoutPlan, ...workoutPlans])
    //         })
    //       } else {
    //         res.json()
    //         .then((errors) => {
    //           console.error(errors)
    //         })
    //       }
    //     })
    // }
      
    //   function handleShowUpdateForm() {
    //     setShowUpdateForm(!showUpdateForm)
    // }

    // function handleShowAddResourceForm() {
    //     setshowAddResourceForm(!showAddResourceForm)
    // }

    // function handleFormChange(e){
    //     setResourceFormData({...resourceFormData, [e.target.name]:e.target.value})
    // }
      
    //   if (climb.length === 0) {
    //       return <h2>Loading. . .</h2>
    //     }

    console.log(sessionExercises)
    
    const climbingDrill= sessionExercises.length > 0  ? sessionExercises[0].session_climbing_drills?.map(climbingDrill => <ClimbingDrillTableLine key={climbingDrill.id} climbingDrill={climbingDrill} sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/>)
    : null

    const exercises= sessionExercises.length > 0 ? sessionExercises[0].session_exercises.map(exercise => <ExerciseTableLine key={exercise.id} exercise={exercise} sessionExercises={sessionExercises} setSessionExercises={setSessionExercises}/>)
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