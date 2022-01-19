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
        <div>
            <div className="container">
                <div className="row">
                    <div className="card" /*style="'width: 18rem;"*/>
                        <div className="card-body">
                            <h5 className="card-title">{workoutPlansData.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {workoutPlansData.Description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Focus:</strong> {workoutPlansData.Focus} </h6>
                            <Link to={`/workoutsessions/${id}`} className="card-link">Workout Sessions</Link>
                            <button type="button" onClick={() => handleDelete(id)} className="btn btn-secondary">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary">Edit</button>
                            {showUpdateForm ? <UpdateWorkoutPlan workoutPlansData={workoutPlansData} workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutPlanCard