function ClimbingDrillTableLine ({climbingDrill}) {


    return (
        <>
        <tbody>
            <tr>
            <th scope="row">{climbingDrill.name}</th>
            <td>{climbingDrill.climb_type}</td>
            <td>{climbingDrill.grade}</td>
            <td>{climbingDrill.climb_attributes}</td>
            <td>{climbingDrill.duration}</td>
            <td>{climbingDrill.reps}</td>
            <td>{climbingDrill.sets}</td>
            <td>{climbingDrill.notes}</td>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-secondary">Delete</button>
            </tr>
        </tbody>

        </>
    )
}

export default ClimbingDrillTableLine