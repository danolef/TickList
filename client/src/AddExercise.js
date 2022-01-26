import { useState } from "react";
import {useParams} from 'react-router-dom'

function AddExercise({sessionExercisesArr, setSessionExercisesArr, addForm, setAddForm}) {
    
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
              setSessionExercisesArr([newExercise, ...sessionExercisesArr])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        setAddForm(!addForm)
    }

  
    function handleSignupChange(e){
        setExerciseData({...exerciseData, [e.target.name]:e.target.value})
    }
    
    return(
        
      <div className="container-fluid">
        <form className="ms-3 me-3" onSubmit={handleSignupSubmit}>
        <div className="row">
          <div className="mb-3 col-3">
              {/* <label className="form-label">Name</label> */}
              <input name="name" placeholder="Name" value={exerciseData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Weight</label> */}
              <input name="weight" placeholder="Weight" value={exerciseData.location} onChange={handleSignupChange} type="text" className="form-control" id="weight"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Duration</label> */}
              <input name="duration" placeholder="Duration" value={exerciseData.duration} onChange={handleSignupChange} type="text" className="form-control" id="duration"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Reps</label> */}
              <input name="reps" placeholder="Reps" value={exerciseData.reps} onChange={handleSignupChange} type="text" className="form-control" id="reps"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Sets</label> */}
              <input name="sets" placeholder="Sets" value={exerciseData.sets} onChange={handleSignupChange} type="text" className="form-control" id="sets"/>
          </div>
          </div>
          <div className="row">
          <div className="mb-3 col-11">
              {/* <label className="form-label">Notes</label> */}
              <textarea name="notes" placeholder="Notes" value={exerciseData.notes} onChange={handleSignupChange} type="text" className="form-control" id="notes"/>
          </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
    </div>
    )
}

export default AddExercise