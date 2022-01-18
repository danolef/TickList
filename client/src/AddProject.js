import { useState } from "react";

function AddProject({projectsArr, setProjectsArr, projectListId}) {

    const [climbData, setClimbData] = useState({
        name:'',
        location:'',
        grade:'',
        climb_type:'',
        climb_attribute:'',
        beta:'',
        completed:false,
        project_list_id: projectListId
    })
   

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/climbs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(climbData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newProject) => {
              console.log(newProject)
                setProjectsArr([newProject, ...projectsArr])
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
        setClimbData({...climbData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input name="name" value={climbData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label for="location" className="form-label">Location</label>
              <input name="location" value={climbData.location} onChange={handleSignupChange} type="text" className="form-control" id="location"/>
          </div>
          <div className="mb-3">
              <label for="grade" className="form-label">Grade</label>
              <input name="grade" value={climbData.grade} onChange={handleSignupChange} type="text" className="form-control" id="grade"/>
          </div>
          <div className="mb-3">
              <label for="climb_type" className="form-label">Climb Type</label>
              <input name="climb_type" value={climbData.climb_type} onChange={handleSignupChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <div className="mb-3">
              <label for="climb_attribute" className="form-label">Climb Attribute</label>
              <input name="climb_attribute" value={climbData.climb_attribute} onChange={handleSignupChange} type="text" className="form-control" id="climb_attribute"/>
          </div>
          <div className="mb-3">
              <label for="beta" className="form-label">Beta</label>
              <input name="beta" value={climbData.beta} onChange={handleSignupChange} type="text" className="form-control" id="beta"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AddProject