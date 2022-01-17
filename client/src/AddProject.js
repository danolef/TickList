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
    console.log(projectListId)

   console.log(projectsArr)
   console.log(projectsArr.id)
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
            <div class="container-fluid">
        <div class="row">
        <form onSubmit={handleSignupSubmit}>
          <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input name="name" value={climbData.name} onChange={handleSignupChange} type="text" class="form-control" id="name"/>
          </div>
          <div class="mb-3">
              <label for="location" class="form-label">Location</label>
              <input name="location" value={climbData.location} onChange={handleSignupChange} type="text" class="form-control" id="location"/>
          </div>
          <div class="mb-3">
              <label for="grade" class="form-label">Grade</label>
              <input name="grade" value={climbData.grade} onChange={handleSignupChange} type="text" class="form-control" id="grade"/>
          </div>
          <div class="mb-3">
              <label for="climb_type" class="form-label">Climb Type</label>
              <input name="climb_type" value={climbData.climb_type} onChange={handleSignupChange} type="text" class="form-control" id="climb_type"/>
          </div>
          <div class="mb-3">
              <label for="climb_attribute" class="form-label">Climb Attribute</label>
              <input name="climb_attribute" value={climbData.climb_attribute} onChange={handleSignupChange} type="text" class="form-control" id="climb_attribute"/>
          </div>
          <div class="mb-3">
              <label for="beta" class="form-label">Beta</label>
              <input name="beta" value={climbData.beta} onChange={handleSignupChange} type="text" class="form-control" id="beta"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AddProject