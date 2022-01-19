
function ExerciseTableLine ({exercise, sessionExercises, setSessionExercises}) {

    const id= exercise.id

    function handleDelete() {
        fetch(`/session_exercises/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setSessionExercises(sessionExercises.filter(p => p.id !== id))
        })
    }
    
    return (
        <>
        <tbody>
            <tr>
            <th scope="row">{exercise.workout_exercise.name}</th>
            <td>{exercise.workout_exercise.weight}</td>
            <td>{exercise.workout_exercise.duration}</td>
            <td>{exercise.workout_exercise.reps}</td>
            <td>{exercise.workout_exercise.sets}</td>
            <td>{exercise.workout_exercise.notes}</td>
            </tr>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" onClick={handleDelete} className="btn btn-secondary">Delete</button>
        </tbody>

        </>
    )
}

export default ExerciseTableLine