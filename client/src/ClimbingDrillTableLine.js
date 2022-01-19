function ClimbingDrillTableLine ({climbingDrill, sessionExercises, setSessionExercises}) {

    const id= climbingDrill.id

    function handleDelete() {
        fetch(`/session_climbing_drills/${id}`, {
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
            <th scope="row">{climbingDrill.climbing_drill.name}</th>
            <td>{climbingDrill.climbing_drill.climb_type}</td>
            <td>{climbingDrill.climbing_drill.grade}</td>
            <td>{climbingDrill.climbing_drill.climb_attributes}</td>
            <td>{climbingDrill.climbing_drill.duration}</td>
            <td>{climbingDrill.climbing_drill.reps}</td>
            <td>{climbingDrill.climbing_drill.sets}</td>
            <td>{climbingDrill.climbing_drill.notes}</td>
            </tr>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" onClick={handleDelete} className="btn btn-secondary">Delete</button>
        </tbody>

        </>
    )
}

export default ClimbingDrillTableLine