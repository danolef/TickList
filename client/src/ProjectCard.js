
function ProjectCard({projectData, setProjectId}) {

    console.log(projectData)
    const completed = projectData.completed
    const climbId= projectData.climb.id

    setProjectId(climbId)

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="card" /*style="'width: 18rem;"*/>
                        <div class="card-body">
                            <h5 class="card-title">{projectData.climb.name}</h5>
                            {/* <p class="card-text"><strong>Description:</strong> {projectData.description}</p> */}
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Location:</strong> {projectData.climb.location} </h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Grade:</strong> {projectData.climb.grade} </h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Climb Type:</strong> {projectData.climb.climb_type} </h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Completed:</strong> {completed ? "yes" : "no"}</h6>
                            <a href= {`/climb/${climbId}`} class="card-link">Climb Info</a>
                            <button type="button" class="btn btn-secondary">Delete</button>
                            <button type="button" class="btn btn-secondary">Edit</button>
                            {/* <a href="/projects/:id" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard