import { useState, useEffect } from "react";

function AddProjectList({projectList, setProjecList}) {

    const [projectListData, setprojectListData] = useState({
        name: '',
        description: '',
        location: '',
        grade: '',
        climb_type: ''
    })

    function handleSignupSubmit(e){
        e.preventDefault();
        console.log(e)
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
    }

    function handleSignupChange(e){
        setprojectListData({...projectListData, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    return(
        <div>
            <div class="container-fluid">
        <div class="row">
        <form onSubmit={handleSignupSubmit}>
          <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input name="name" value={projectListData.name} onChange={handleSignupChange} type="text" class="form-control" id="name"/>
          </div>
          <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <input name="description" value={projectListData.description} onChange={handleSignupChange} type="text" class="form-control" id="description"/>
          </div>
          <div class="mb-3">
              <label for="location" class="form-label">Location</label>
              <input name="location" value={projectListData.location} onChange={handleSignupChange} type="text" class="form-control" id="location"/>
          </div>
          <div class="mb-3">
              <label for="grade" class="form-label">Grade</label>
              <input name="grade" value={projectListData.grade} onChange={handleSignupChange} type="text" class="form-control" id="grade"/>
          </div>
          <div class="mb-3">
              <label for="climb_type" class="form-label">Climb Type</label>
              <input name="climb_type" value={projectListData.climb_type} onChange={handleSignupChange} type="text" class="form-control" id="climb_type"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
        </div>

    )
}

export default AddProjectList