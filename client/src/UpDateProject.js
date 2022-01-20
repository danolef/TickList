import { useState } from "react";

function UpDateProject({climb, setClimb, showUpdateForm, setShowUpdateForm}) {

    const id= climb.id
    const [climbCompleted, setClimbCompleted]= useState(climb.completed)
    const [updateProjectData, setUpdateProjectData] = useState({
        name: climb.climb.name,
        location: climb.climb.location,
        grade: climb.climb.location,
        climb_type: climb.climb.climb_type,
        climb_attribute: climb.climb.climb_attribute,
        beta: climb.beta,
        completed: climbCompleted,
        project_list_id: climb.project_list.id
    })
    
    console.log(climbCompleted)
    console.log(updateProjectData)

    
    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/climbs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProjectData)
      })
      .then(res => res.json())
      .then(updateProject => {
          setClimb(updateProject)
      })
      setShowUpdateForm(!showUpdateForm)
  }
    

    function handleFormChange(e){
        setUpdateProjectData({...updateProjectData, [e.target.name]:e.target.value})
    }

    function handleCompleted(){
        setClimbCompleted(!climbCompleted)
        setUpdateProjectData({...updateProjectData, completed: !climbCompleted})
    }
    
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                <form onSubmit={handleUpdateSubmit}>
                <div class="mb-3 form-check">
                    <input type="checkbox" onClick={handleCompleted} className="form-check-input" id="completed"/>
                    <label className="form-check-label" >
                        {climbCompleted ? "Uncheck if not completed" : "Check if Completed"}
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" value={updateProjectData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input name="location" value={updateProjectData.location} onChange={handleFormChange} type="text" className="form-control" id="location"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Grade</label>
                    <input name="grade" value={updateProjectData.grade} onChange={handleFormChange} type="text" className="form-control" id="grade"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Climb Type</label>
                    <input name="climb_type" value={updateProjectData.climb_type} onChange={handleFormChange} type="text" className="form-control" id="climb_type"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Climb Attribute</label>
                    <input name="climb_attribute" value={updateProjectData.climb_attribute} onChange={handleFormChange} type="text" className="form-control" id="climb_attribute"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Beta</label>
                    <input name="beta" value={updateProjectData.beta} onChange={handleFormChange} type="text" className="form-control" id="beta"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>

    )
}

export default UpDateProject