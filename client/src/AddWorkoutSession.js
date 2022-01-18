import { useState } from "react";

function AddWorkoutSession({workoutSessions, setWorkoutSessions}) {

    const [sessionData, setSessionData] = useState({
        name:'',
        description:'',
        gym_area:''
    })
   

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/workout_sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sessionData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newSessions) => {
              setWorkoutSessions([newSessions, ...workoutSessions])
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
        setSessionData({...sessionData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input name="name" value={sessionData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label for="description" className="form-label">Description</label>
              <input name="description" value={sessionData.description} onChange={handleSignupChange} type="text" className="form-control" id="description"/>
          </div>
          <div className="mb-3">
              <label for="gym_area" className="form-label">Gym Area</label>
              <input name="gym_area" value={sessionData.gym_area} onChange={handleSignupChange} type="text" className="form-control" id="gym_area"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AddWorkoutSession