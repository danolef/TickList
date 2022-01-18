import { useState } from "react";

function UpdateWorkoutSession({workoutSessionData, workoutSessions, setWorkoutSessions}) {

    const id= workoutSessionData.id
    const [updateWorkoutSessionData, setupdateWorkoutSessionData] = useState({
        name: workoutSessionData.name,
        Description: workoutSessionData.description,
        gym_area: workoutSessionData.gym_area,
    })

    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/workout_sessions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateWorkoutSessionData)
      })
      .then(res => res.json())
      .then(updatedWorkoutSession => {
        setWorkoutSessions(workoutSessions.map(session => {
              if(session.id === updatedWorkoutSession.id){
                  return updatedWorkoutSession
              } else {
                  return session
              }
          }))
      })
  }
    

    function handleFormChange(e){
        setupdateWorkoutSessionData({...updateWorkoutSessionData, [e.target.name]:e.target.value})
    }
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input name="name" value={updateWorkoutSessionData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <input name="description" value={updateWorkoutSessionData.description} onChange={handleFormChange} type="text" className="form-control" id="description"/>
                    </div>
                    <div className="mb-3">
                        <label for="gym_area" className="form-label">Gym Area</label>
                        <input name="gym_area" value={updateWorkoutSessionData.gym_area} onChange={handleFormChange} type="text" class="form-control" id="gym_area"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateWorkoutSession