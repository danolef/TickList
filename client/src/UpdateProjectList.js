import { useState } from "react";

function UpDateProjectList({projectList, setProjecList, projectListData, showUpdateForm, setShowUpdateForm}) {

    const id= projectListData.id
    const [updateProjectListData, setUpdateProjectListData] = useState({
        name: projectListData.name,
        description: projectListData.description,
        location: projectListData.location,
        grade: projectListData.grade,
        climb_type: projectListData.climb_type 
    })

    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/project_lists/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProjectListData)
      })
      .then(res => res.json())
      .then(updateProjectList => {
        setProjecList(projectList.map(project => {
              if(project.id === updateProjectList.id){
                  return updateProjectList
              } else {
                  return project
              }
          }))
      })
      setShowUpdateForm(!showUpdateForm)
  }
    

    function handleFormChange(e){
        setUpdateProjectListData({...updateProjectListData, [e.target.name]:e.target.value})
    }
    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" value={updateProjectListData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea name="description" value={updateProjectListData.description} onChange={handleFormChange} type="text" className="form-control" id="description"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Location</label>
              <input name="location" value={updateProjectListData.location} onChange={handleFormChange} type="text" className="form-control" id="location"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Grade</label>
              <input name="grade" value={updateProjectListData.grade} onChange={handleFormChange} type="text" className="form-control" id="grade"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Climb Type</label>
              <input name="climb_type" value={updateProjectListData.climb_type} onChange={handleFormChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>

    )
}

export default UpDateProjectList