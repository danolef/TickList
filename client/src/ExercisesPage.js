
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import ExerciseTableLine from './ExerciseTableLine'
import ClimbingDrillTableLine from './ClimbingDrillTableLine'

function ExercisesPage({sessionExercises, setSessionExercises}) {
  
    const {id} = useParams()
    
    useEffect( () => {
        fetch(`/workout_sessions/${id}`)
        .then ((res) => res.json())
        .then((exercises) => {
            setSessionExercises(exercises) 
        })
    }, [])
    
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

    console.log("sessionExercises.workout_exercises:", sessionExercises.workout_exercises)
    console.log("sessionExercises.length:", sessionExercises.length)
        
    const exercises= sessionExercises.length === undefined ? sessionExercises.workout_exercises.map(exercise => <ExerciseTableLine key={exercise.id} exercise={exercise}/>)
        : null

    const climbingDrill= sessionExercises.climbing_drills.length === undefined ? sessionExercises.climbing_drills.map(climbingDrill => <ExerciseTableLine key={climbingDrill.id} climbingDrill={climbingDrill}/>)
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
                    <button type="button" className="btn btn-secondary">Add Exercise</button>
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
                    <button type="button" className="btn btn-secondary">Add Climbing Drill</button>
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