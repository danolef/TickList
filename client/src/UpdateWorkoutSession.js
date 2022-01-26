import { useState } from "react";

function UpdateWorkoutSession({workoutSessionData, workoutSessions, setWorkoutSessions, showUpdateForm, setShowUpdateForm}) {

    const id= workoutSessionData.id
    const [updateWorkoutSessionData, setupdateWorkoutSessionData] = useState({
        name: workoutSessionData.name,
        description: workoutSessionData.description,
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
      setShowUpdateForm(!showUpdateForm)
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
                        <label className="form-label">Name</label>
                        <input name="name" value={updateWorkoutSessionData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="description" value={updateWorkoutSessionData.description} onChange={handleFormChange} type="text" className="form-control" id="description"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gym Area</label>
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