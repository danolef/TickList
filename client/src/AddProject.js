import { useState } from "react";

function AddProject({projectsArr, setProjectsArr, projectListId, addForm, setAddForm}) {

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
                setProjectsArr([newProject, ...projectsArr])
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
        setClimbData({...climbData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3 col-6">
              {/* <label className="form-label">Name</label> */}
              <input name="name" placeholder="Name" value={climbData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3 col-6">
              {/* <label className="form-label">Location</label> */}
              <input name="location" placeholder="Location" value={climbData.location} onChange={handleSignupChange} type="text" className="form-control" id="location"/>
          </div>
          <div className="mb-3 col-6">
              {/* <label className="form-label">Grade</label> */}
              <input name="grade" placeholder="Grade" value={climbData.grade} onChange={handleSignupChange} type="text" className="form-control" id="grade"/>
          </div>
          <div className="mb-3 col-6">
              {/* <label className="form-label">Climb Type</label> */}
              <input name="climb_type" placeholder="Climb Type" value={climbData.climb_type} onChange={handleSignupChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <div className="mb-3 col-6">
              {/* <label className="form-label">Climb Attribute</label> */}
              <input name="climb_attribute" placeholder="Climb Attribute" value={climbData.climb_attribute} onChange={handleSignupChange} type="text" className="form-control" id="climb_attribute"/>
          </div>
          <div className="mb-3 col-10">
              {/* <label className="form-label">Beta</label> */}
              <textarea name="beta" placeholder="Beta" value={climbData.beta} onChange={handleSignupChange} type="text" className="form-control" id="beta"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>
    )
}

export default AddProject