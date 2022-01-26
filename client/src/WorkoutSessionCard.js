import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateWorkoutSession from "./UpdateWorkoutSession";

function WorkoutSessionCard({workoutSessionData, workoutSessions, setWorkoutSessions}) {

    const [showUpdateForm, setShowUpdateForm] = useState(false)
    
    const id= workoutSessionData.id
    
    function handleDelete() {
        fetch(`/workout_sessions/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setWorkoutSessions(workoutSessions.filter(p => p.id !== id))
        })
    }

    function handleShowUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }
    
    return (
       
                <div className="col-3 ms-4 mb-4 p-0 border border-dark">
                    <div className="card" /*style="'width: 18rem;"*/>
                        <div className="card-body">
                            <h5 className="card-title">{workoutSessionData.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {workoutSessionData.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Gym Area:</strong> {workoutSessionData.gym_area} </h6>
                            <Link to={`/exercises/${id}`} className="card-link">Session Exercises</Link>
                            <div div className="row mt-4">
                            <button type="button" onClick={() => handleDelete(id)} className="btn btn-secondary w-50">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary w-50">Edit</button>
                            </div>
                            {showUpdateForm ? <UpdateWorkoutSession workoutSessionData={workoutSessionData} workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm}/>
                            : null}
                        </div>
                    </div>
                </div>
    )
}

export default WorkoutSessionCard