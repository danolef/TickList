
function ExerciseTableLine ({exercise}) {

    return (
        <>
        <tbody>
            <tr>
            <th scope="row">{exercise.name}</th>
            <td>{exercise.weight}</td>
            <td>{exercise.duration}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.notes}</td>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-secondary">Delete</button>
            </tr>
        </tbody>

        </>
    )
}

export default ExerciseTableLine