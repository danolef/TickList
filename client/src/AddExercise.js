import { useState } from "react";
import {useParams} from 'react-router-dom'

function AddExercise({sessionExercisesArr, setSessionExercisesArr}) {
    
    const {id} = useParams()
    const [exerciseData, setExerciseData] = useState({
        name:'',
        weight:'',
        duration:'',
        reps:'',
        sets:'',
        notes:'',
        workout_session_id: id
    })
   

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/workout_exercises", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(exerciseData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newExercise) => {
              // console.log(newExercise)
              setSessionExercisesArr([newExercise, ...sessionExercisesArr])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
    }

  
    function handleSignupChange(e){
        setExerciseData({...exerciseData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input name="name" value={exerciseData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label for="weight" className="form-label">Weight</label>
              <input name="weight" value={exerciseData.location} onChange={handleSignupChange} type="text" className="form-control" id="weight"/>
          </div>
          <div className="mb-3">
              <label for="duration" className="form-label">Duration</label>
              <input name="duration" value={exerciseData.duration} onChange={handleSignupChange} type="text" className="form-control" id="duration"/>
          </div>
          <div className="mb-3">
              <label for="reps" className="form-label">Reps</label>
              <input name="reps" value={exerciseData.reps} onChange={handleSignupChange} type="text" className="form-control" id="reps"/>
          </div>
          <div className="mb-3">
              <label for="sets" className="form-label">Sets</label>
              <input name="sets" value={exerciseData.sets} onChange={handleSignupChange} type="text" className="form-control" id="sets"/>
          </div>
          <div className="mb-3">
              <label for="notes" className="form-label">Notes</label>
              <input name="notes" value={exerciseData.notes} onChange={handleSignupChange} type="text" className="form-control" id="notes"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AddExercise