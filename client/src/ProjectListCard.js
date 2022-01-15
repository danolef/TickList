import { useState } from "react";

function ProjectListCard({projectListData, projectList, setProjecList}) {

    const id= projectListData.id
    
    function handleDelete() {
        fetch(`project_lists/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setProjecList(projectList.filter(p => p.id !== id))
        })
    }
    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="card" /*style="'width: 18rem;"*/>
                        <div class="card-body">
                            <h5 class="card-title">{projectListData.name}</h5>
                            <p class="card-text"><strong>Description:</strong> {projectListData.description}</p>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Location:</strong> {projectListData.location} </h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Grade:</strong> {projectListData.grade} </h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Climb Type:</strong> {projectListData.climb_type} </h6>
                            <a href={`/projectlists/${id}`} class="card-link">Projects</a>
                            <button type="button" onClick={() => handleDelete(id)} class="btn btn-secondary">Delete</button>
                            <button type="button" class="btn btn-secondary">Edit</button>
                            {/* <a href="/projects/:id" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectListCard