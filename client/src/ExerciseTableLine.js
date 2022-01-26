import { useState } from 'react'
import UpdateExercise from './UpdateExercise'

function ExerciseTableLine ({exercise, sessionExercisesArr, setSessionExercisesArr}) {

    const id= exercise.id
    const [updateForm, setUpdateForm] = useState(false)

    function handleDelete() {
        fetch(`/session_exercises/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setSessionExercisesArr(sessionExercisesArr.filter(p => p.id !== id))
        })
    }

    function showUpdateForm() {
        setUpdateForm(!updateForm)
    }
    
    return (
        <> 
        <tbody>
            <tr>
            <th className='col-2' scope="row">{exercise.workout_exercise.name}</th>
            <td className='col-1'>{exercise.workout_exercise.weight}</td>
            <td className='col-1'>{exercise.workout_exercise.duration}</td>
            <td className='col-1'>{exercise.workout_exercise.reps}</td>
            <td className='col-1'>{exercise.workout_exercise.sets}</td>
            <td className='col-3'>{exercise.workout_exercise.notes}</td>
            <td className='col-1'><button type="button" onClick={showUpdateForm} className="btn btn-secondary">Edit</button>
            <button type="button" onClick={handleDelete} className="btn btn-secondary">Delete</button></td>
            </tr>
            <div className='row ms-2'>
            {updateForm ? <UpdateExercise exercise={exercise} sessionExercisesArr={sessionExercisesArr} setSessionExercisesArr={setSessionExercisesArr} updateForm={updateForm} setUpdateForm={setUpdateForm}/> : null}
            </div>
        </tbody>

        </>
    )
}

export default ExerciseTableLine