import { useState } from 'react'
import UpdateClimbingDrill from './UpdateClimbingDrill'

function ClimbingDrillTableLine ({climbingDrill, sessionClimbingDrillArr, setSessionClimbingDrillArr}) {

    const id= climbingDrill.id
    const [updateForm, setUpdateForm] = useState(false)

    function handleDelete() {
        fetch(`/session_climbing_drills/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setSessionClimbingDrillArr(sessionClimbingDrillArr.filter(p => p.id !== id))
        })
    }

    function showUpdateForm() {
        setUpdateForm(!updateForm)
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
            <button type="button" onClick={showUpdateForm} className="btn btn-secondary">Edit</button>
            {updateForm ? <UpdateClimbingDrill climbingDrill={climbingDrill} sessionClimbingDrillArr={sessionClimbingDrillArr} setSessionClimbingDrillArr={setSessionClimbingDrillArr}/> : null}
            <button type="button" onClick={handleDelete} className="btn btn-secondary">Delete</button>
        </tbody>

        </>
    )
}

export default ClimbingDrillTableLine