import { useState } from "react";
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
        <div>
            <div className="container">
                <div className="row">
                    <div className="card" /*style="'width: 18rem;"*/>
                        <div className="card-body">
                            <h5 className="card-title">{workoutSessionData.name}</h5>
                            <p className="card-text"><strong>Description:</strong> {workoutSessionData.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Gym Area:</strong> {workoutSessionData.gym_area} </h6>
                            <a href={`/workoutsessions/${id}`} className="card-link">Session Exercises</a>
                            <button type="button" onClick={() => handleDelete(id)} className="btn btn-secondary">Delete</button>
                            <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary">Edit</button>
                            {showUpdateForm ? <UpdateWorkoutSession workoutSessionData={workoutSessionData} workoutSessions={workoutSessions} setWorkoutSessions={setWorkoutSessions}/>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutSessionCard