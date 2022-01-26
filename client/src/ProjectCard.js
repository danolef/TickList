
import {Link} from 'react-router-dom'

function ProjectCard({projectData, setProjectId, projectsArr, setProjectsArr}) {

    const completed = projectData.completed
    const climbId= projectData.climb.id
    const id= projectData.id

    setProjectId(climbId)

    function handleDelete() {
        fetch(`/projects/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setProjectsArr(projectsArr.filter(p => p.id !== id))
        })
    }

    return (
        // <div>
        //     <div className="container">
                <div className="col-3 ms-4 p-0 border border-dark">
                    <div className="card" /*style="'width: 18rem;"*/>
                        <div className="card-body">
                            <h5 className="card-title mb-4">{projectData.climb.name}</h5>
                            {/* <p class="card-text"><strong>Description:</strong> {projectData.description}</p> */}
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Location:</strong> {projectData.climb.location} </h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Grade:</strong> {projectData.climb.grade} </h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Climb Type:</strong> {projectData.climb.climb_type} </h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Completed:</strong> {completed ? "yes" : "no"}</h6>
                            <Link to= {`/climb/${id}`} className="card-link">Climb Info</Link>
                            <div className="row mt-4">
                            <button type="button" onClick={handleDelete} className="btn btn-secondary col-4">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>
    )
}

export default ProjectCard