import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateWorkoutPlan from "./UpdateWorkoutPlan";

function WorkoutPlanCard({workoutPlansData, workoutPlans, setWorkoutPlans}) {

    const [showUpdateForm, setShowUpdateForm] = useState(false)
    
    const id= workoutPlansData.id
    
    function handleDelete() {
        fetch(`workout_plans/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setWorkoutPlans(workoutPlans.filter(p => p.id !== id))
        })
    }

    function handleShowUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }
    
    return (
        <div className="col-3 ms-4 mb-4 p-0 border border-dark">
            
                    <div className="card" /*style="'width: 18rem;"*/>
                        <div className="card-body">
                            <h5 className="card-title">{workoutPlansData.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {workoutPlansData.Description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Focus:</strong> {workoutPlansData.Focus} </h6>
                            <Link to={`/workoutsessions/${id}`} className="card-link">Workout Sessions</Link>
                            <div div className="row mt-4">
                            <button type="button" onClick={() => handleDelete(id)} className="btn btn-secondary w-50">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary w-50">Edit</button>
                            </div>
                            {showUpdateForm ? <UpdateWorkoutPlan workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm}/>
                            : null}
                        </div>
                    </div>
                
        </div>
    )
}

export default WorkoutPlanCard