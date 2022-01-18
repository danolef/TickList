import { useState } from "react";

function UpDateProject({climb, projectsArr, setProjectsArr}) {

    console.log(projectsArr)

    const id= climb.id
    const [updateProjectData, setUpdateProjectData] = useState({
        name: climb.climb.name,
        location: climb.climb.location,
        grade: climb.climb.location,
        climb_type: climb.climb.climb_type,
        climb_attribute: climb.climb.climb_attribute,
        beta: climb.beta,
        completed: climb.completed,
        project_list_id: climb.project_list.id
    })
    
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
        setProjectsArr(projectsArr.map(project => {
              if(project.id === updateProject.id){
                  return updateProject
              } else {
                  return project
              }
          }))
      })
  }
    

    function handleFormChange(e){
        setUpdateProjectData({...updateProjectData, [e.target.name]:e.target.value})
    }
    
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                <form onSubmit={handleUpdateSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input name="name" value={updateProjectData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input name="location" value={updateProjectData.location} onChange={handleFormChange} type="text" className="form-control" id="location"/>
                </div>
                <div className="mb-3">
                    <label for="grade" className="form-label">Grade</label>
                    <input name="grade" value={updateProjectData.grade} onChange={handleFormChange} type="text" className="form-control" id="grade"/>
                </div>
                <div className="mb-3">
                    <label for="climb_type" className="form-label">Climb Type</label>
                    <input name="climb_type" value={updateProjectData.climb_type} onChange={handleFormChange} type="text" className="form-control" id="climb_type"/>
                </div>
                <div className="mb-3">
                    <label for="climb_attribute" className="form-label">Climb Attribute</label>
                    <input name="climb_attribute" value={updateProjectData.climb_attribute} onChange={handleFormChange} type="text" className="form-control" id="climb_attribute"/>
                </div>
                <div className="mb-3">
                    <label for="beta" className="form-label">Beta</label>
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