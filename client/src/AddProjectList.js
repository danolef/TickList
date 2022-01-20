import { useState } from "react";

function AddProjectList({addProjectListForm, setAddProjectListForm, projectList, setProjecList}) {

    const [projectListData, setprojectListData] = useState({
        name: '',
        description: '',
        location: '',
        grade: '',
        climb_type: ''
    })

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/project_lists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectListData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newProjectList) => {
                setProjecList([newProjectList, ...projectList])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        setAddProjectListForm(!addProjectListForm)
    }

    function handleSignupChange(e){
        setprojectListData({...projectListData, [e.target.name]:e.target.value})
    }

    return(
        <div>
            <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" value={projectListData.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Description</label>
              <input name="description" value={projectListData.description} onChange={handleSignupChange} type="text" className="form-control" id="description"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Location</label>
              <input name="location" value={projectListData.location} onChange={handleSignupChange} type="text" className="form-control" id="location"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Grade</label>
              <input name="grade" value={projectListData.grade} onChange={handleSignupChange} type="text" className="form-control" id="grade"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Climb Type</label>
              <input name="climb_type" value={projectListData.climb_type} onChange={handleSignupChange} type="text" className="form-control" id="climb_type"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>

    )
}

export default AddProjectList