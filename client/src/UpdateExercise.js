import { useState } from "react";


function UpdateExercise({exercise, sessionExercisesArr, setSessionExercisesArr, updateForm, setUpdateForm}) {

    const sessionExerciseId= exercise.id    
    const id = exercise.workout_exercise.id
    const [updateExerciseData, setUpdateExerciseData] = useState({
        name: exercise.workout_exercise.name,
        weight: exercise.workout_exercise.weight,
        duration: exercise.workout_exercise.duration,
        reps: exercise.workout_exercise.reps,
        sets: exercise.workout_exercise.sets,
        notes: exercise.workout_exercise.notes,
        session_exercise_id: sessionExerciseId
    })
   
    
    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/workout_exercises/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateExerciseData)
      })
      .then(res => res.json())
      .then(updateExercise => {
          console.log(updateExercise)
          setSessionExercisesArr(sessionExercisesArr.map(sessExercise => {
              if(sessExercise.id === updateExercise.id){
                  return updateExercise
              } else {
                  return sessExercise
              }
          }))
      })
      setUpdateForm(!updateForm)
  }

    function handleSignupChange(e){
        setUpdateExerciseData({...updateExerciseData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" value={updateExerciseData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Weight</label>
              <input name="weight" value={updateExerciseData.weight} onChange={handleSignupChange} type="text" className="form-control" id="weight"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Duration</label>
              <input name="duration" value={updateExerciseData.duration} onChange={handleSignupChange} type="text" className="form-control" id="duration"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Reps</label>
              <input name="reps" value={updateExerciseData.reps} onChange={handleSignupChange} type="text" className="form-control" id="reps"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Sets</label>
              <input name="sets" value={updateExerciseData.sets} onChange={handleSignupChange} type="text" className="form-control" id="sets"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Notes</label>
              <input name="notes" value={updateExerciseData.notes} onChange={handleSignupChange} type="text" className="form-control" id="notes"/>
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default UpdateExercise