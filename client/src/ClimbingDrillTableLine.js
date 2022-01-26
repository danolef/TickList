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
            <th className='col-2' scope="row">{climbingDrill.climbing_drill.name}</th>
            <td className='col-1'>{climbingDrill.climbing_drill.climb_type}</td>
            <td className='col-1'>{climbingDrill.climbing_drill.grade}</td>
            <td className='col-1'>{climbingDrill.climbing_drill.climb_attributes}</td>
            <td className='col-1'>{climbingDrill.climbing_drill.duration}</td>
            <td className='col-1'>{climbingDrill.climbing_drill.reps}</td>
            <td className='col-1'>{climbingDrill.climbing_drill.sets}</td>
            <td className='col-3'>{climbingDrill.climbing_drill.notes}</td>
            <td className='col-1'><button type="button" onClick={showUpdateForm} className="btn btn-secondary">Edit</button>
            <button type="button" onClick={handleDelete} className="btn btn-secondary">Delete</button></td>
            </tr>
            {updateForm ? <UpdateClimbingDrill climbingDrill={climbingDrill} sessionClimbingDrillArr={sessionClimbingDrillArr} setSessionClimbingDrillArr={setSessionClimbingDrillArr} updateForm={updateForm} setUpdateForm={setUpdateForm}/> : null}
        </tbody>

        </>
    )
}

export default ClimbingDrillTableLine