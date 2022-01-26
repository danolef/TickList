import { useState } from "react";
import {useParams} from 'react-router-dom'

function AddClimbingDrill({sessionClimbingDrillArr, setSessionClimbingDrillArr, addClimbingForm, setaddClimbingForm}) {
    
    const {id} = useParams()
    const [climbingDrillData, setclimbingDrillData] = useState({
        name:'',
        climb_type:'',
        grade:'',
        climb_attributes:'',
        duration:'',
        reps:'',
        sets:'',
        notes:'',
        workout_session_id: id
    })
   

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/climbing_drills", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(climbingDrillData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newClimbingDrill) => {
              setSessionClimbingDrillArr([newClimbingDrill, ...sessionClimbingDrillArr])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        setaddClimbingForm(!addClimbingForm)
    }

  
    function handleSignupChange(e){
        setclimbingDrillData({...climbingDrillData, [e.target.name]:e.target.value})
    }
    
    return(
       <div className="container-fluid">
        <form className="ms-4 me-3" onSubmit={handleSignupSubmit}>
        <div className="row">
          <div className="mb-3 col-3">
              {/* <label className="form-label">Name</label> */}
              <input name="name" placeholder="Name" value={climbingDrillData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3 col-3">
              {/* <label className="form-label">Climb Type</label> */}
              <input name="climb_type" placeholder="Climb Type" value={climbingDrillData.climb_type} onChange={handleSignupChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <div className="mb-3 col-3">
              {/* <label className="form-label">Grade</label> */}
              <input name="grade" placeholder="Grade" value={climbingDrillData.grade} onChange={handleSignupChange} type="text" className="form-control" id="grade"/>
          </div>
          </div>
          <div className="row">
          <div className="mb-3 col-3">
              {/* <label className="form-label">Climb Attributes</label> */}
              <input name="climb_attributes" placeholder="Climb Attributes" value={climbingDrillData.climb_attributes} onChange={handleSignupChange} type="text" className="form-control" id="climb_attributes"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Duration</label> */}
              <input name="duration" placeholder="Duration" value={climbingDrillData.duration} onChange={handleSignupChange} type="text" className="form-control" id="duration"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Reps</label> */}
              <input name="reps" placeholder="Reps" value={climbingDrillData.reps} onChange={handleSignupChange} type="text" className="form-control" id="reps"/>
          </div>
          <div className="mb-3 col-2">
              {/* <label className="form-label">Sets</label> */}
              <input name="sets" placeholder="Sets" value={climbingDrillData.sets} onChange={handleSignupChange} type="text" className="form-control" id="sets"/>
          </div>
          </div>
          <div className="row">
          <div className="mb-3 col-9">
              {/* <label className="form-label">Notes</label> */}
              <textarea name="notes" placeholder="Notes" value={climbingDrillData.notes} onChange={handleSignupChange} type="text" className="form-control" id="notes"/>
          </div>
          </div>
          <div className="row ms-1">
          <button type="submit" className="btn btn-primary col-2">Submit</button>
      </div>
      </form>  
    </div>
    )
}

export default AddClimbingDrill