import { useState } from "react";
// import UpDateProjectList from "./UpdateProjectList";

function WorkoutPlanCard({workoutPlansData, workoutPlans, setWorkoutPlans}) {

    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const[updateForm, setupdateFrom] = useState ({
        name: workoutPlansData.name,
        Description: workoutPlansData.Description,
        Focus: workoutPlansData.Focus,
    })
    
    const id= workoutPlansData.id
    
    function handleDelete() {
        fetch(`workout_plans/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setWorkoutPlans(workoutPlans.filter(p => p.id !== id))
        })
    }

    function handleShowUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }
    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="card" /*style="'width: 18rem;"*/>
                        <div class="card-body">
                            <h5 class="card-title">{workoutPlansData.name}</h5>
                            <p class="card-text"><strong>Description:</strong> {workoutPlansData.Description}</p>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Focus:</strong> {workoutPlansData.Focus} </h6>
                            <a href={`/projectlists/${id}`} class="card-link">Workout Sessions</a>
                            <button type="button" onClick={() => handleDelete(id)} class="btn btn-secondary">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} class="btn btn-secondary">Edit</button>
                            {/* <a href="/projects/:id" class="card-link">Another link</a> */}
                            {/* {showUpdateForm ? <UpDateProjectList projectListData={projectListData} projectList={projectList} setProjecList={setProjecList}/>
                            : null} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutPlanCard