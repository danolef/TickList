import { useState } from "react";
import UpDateProjectList from "./UpdateProjectList";
import {Link} from 'react-router-dom'

function ProjectListCard({projectListData, projectList, setProjecList}) {

    const [showUpdateForm, setShowUpdateForm] = useState(false)
        
    const id= projectListData.id
    
    function handleDelete() {
        fetch(`project_lists/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setProjecList(projectList.filter(p => p.id !== id))
        })
    }

    function handleShowUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }
    
    return (
        // <div className="row">
        <div className="col-4 ms-4 p-0 border border-dark">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title mb-4 ">{projectListData.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {projectListData.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Location:</strong> {projectListData.location} </h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Grade:</strong> {projectListData.grade} </h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Climb Type:</strong> {projectListData.climb_type} </h6>
                            <Link to={`/projectlists/${id}`} className="card-link">Projects</Link>
                            <div className="row mt-4"> 
                            <button type="button" onClick={() => handleDelete(id)} className="btn btn-secondary w-50">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary w-50">Edit</button>
                            </div>
                            {showUpdateForm ? <UpDateProjectList projectListData={projectListData} projectList={projectList} setProjecList={setProjecList} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm}/>
                            : null}
                        </div>
                    </div>

        </div>
        // </div>
    )
}

export default ProjectListCard