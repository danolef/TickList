import { useState } from "react";


function UpdateClimbingDrill({climbingDrill, sessionClimbingDrillArr, setSessionClimbingDrillArr}) {
    
    const sessionClimbingDrillId= climbingDrill.id
    const id = climbingDrill.climbing_drill.id
    const [updateClimbingDrillData, setUpdateClimbingDrillData] = useState({
        name: climbingDrill.climbing_drill.name,
        climb_type: climbingDrill.climbing_drill.climb_type,
        grade: climbingDrill.climbing_drill.grade,
        climb_attributes: climbingDrill.climbing_drill.climb_attributes,
        duration: climbingDrill.climbing_drill.duration,
        reps: climbingDrill.climbing_drill.reps,
        sets: climbingDrill.climbing_drill.sets,
        notes: climbingDrill.climbing_drill.notes,
        session_climbing_drill_id: sessionClimbingDrillId
    })
   

    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/climbing_drills/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateClimbingDrillData)
      })
      .then(res => res.json())
      .then(updateClimbingDrill => {
        setSessionClimbingDrillArr(sessionClimbingDrillArr.map(sessClimbingDrill => {
            if(sessClimbingDrill.id === updateClimbingDrill.id){
                return updateClimbingDrill
            } else {
                return sessClimbingDrill
            }
          }))
        })
    }
  
    function handleSignupChange(e){
        setUpdateClimbingDrillData({...updateClimbingDrillData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input name="name" value={updateClimbingDrillData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label for="climb_type" className="form-label">Climb Type</label>
              <input name="climb_type" value={updateClimbingDrillData.climb_type} onChange={handleSignupChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <div className="mb-3">
              <label for="grade" className="form-label">Grade</label>
              <input name="grade" value={updateClimbingDrillData.grade} onChange={handleSignupChange} type="text" className="form-control" id="grade"/>
          </div>
          <div className="mb-3">
              <label for="climb_attributes" className="form-label">Climb Attributes</label>
              <input name="climb_attributes" value={updateClimbingDrillData.climb_attributes} onChange={handleSignupChange} type="text" className="form-control" id="climb_attributes"/>
          </div>
          <div className="mb-3">
              <label for="duration" className="form-label">Duration</label>
              <input name="duration" value={updateClimbingDrillData.duration} onChange={handleSignupChange} type="text" className="form-control" id="duration"/>
          </div>
          <div className="mb-3">
              <label for="reps" className="form-label">Reps</label>
              <input name="reps" value={updateClimbingDrillData.reps} onChange={handleSignupChange} type="text" className="form-control" id="reps"/>
          </div>
          <div className="mb-3">
              <label for="sets" className="form-label">Sets</label>
              <input name="sets" value={updateClimbingDrillData.sets} onChange={handleSignupChange} type="text" className="form-control" id="sets"/>
          </div>
          <div className="mb-3">
              <label for="notes" className="form-label">Notes</label>
              <input name="notes" value={updateClimbingDrillData.notes} onChange={handleSignupChange} type="text" className="form-control" id="notes"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default UpdateClimbingDrill