import { useState, useEffect } from 'react'
import {Link , useParams} from 'react-router-dom'

function ProjectPlan({workoutPlans, setWorkoutPlans}) {


    const [projectPlanArr, setProjectPlanArr] = useState([])
    const [workoutPlanId, setWorkoutPlanId] = useState(null)

    const {id} = useParams()

    console.log(workoutPlanId)

    useEffect( () => {
        fetch(`/project_plans/${id}`)
        .then ((res) => res.json())
        .then((projectPlan) => {
            setProjectPlanArr(projectPlan) 
        })
    }, [])
    
    useEffect( () => {
        fetch("/workout_plans")
        .then ((res) => res.json())
        .then((workoutPlansArr) => {
            setWorkoutPlans(workoutPlansArr) 
        })
    }, [])
    
      
    function handleDelete(id) {
        fetch(`/project_plans/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setProjectPlanArr(projectPlanArr.filter(p => p.id !== id))
        })
    }

    function handlePlanChange(e){
        setWorkoutPlanId(e.target.value)
    }

    function addProjectPlan(e) {
        e.preventDefault()
        fetch(`/climb/${id}/project_plans`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(workoutPlanId)
          })
          .then((res) => {
            if (res.ok) {
              res.json()
              .then((newProjectPlan) => {
                setProjectPlanArr([newProjectPlan, ...projectPlanArr])
              })
            } else {
              res.json()
              .then((errors) => {
                console.error(errors)
              })
            }
          })
      }
    
      const workoutPlanLink = projectPlanArr.length > 0 ? projectPlanArr.map((projectData) => 
        <>
          <div className="col-3 ms-4 mb-4 p-0 border border-dark">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3"> <strong>Workout Name:</strong> {projectData.workout_plan.name} </h5>
                <Link to= {`/workoutsessions/${projectData.workout_plan.id}`} className="card-link">Go to Workout Plan</Link>
                <div className='row'>
                <button type="button" onClick={()=>handleDelete(projectData.id)} className="btn btn-secondary col-4 ms-2 mt-4">Delete</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='row mb-3'>
            <h3 className="col-5">{projectData.workout_plan.name}</h3>
            <button type="button" onClick={()=>handleDelete(projectData.id)} className="btn btn-secondary col-2">Delete</button>
          </div>
          <div className='row mb-5'>
            <Link to= {`/workoutsessions/${projectData.workout_plan.id}`} className="card-link">Go to Workout Plan</Link>
            </div> */}
        </>
      )
      : null

      const workoutPlanSelect = workoutPlans.map(plan => <>
        <option className='col-5' key={plan.id} value={plan.id}>{plan.name}</option>
      </>)

    return (
        <div >
            <div className="container-fluid">
            <div className="row mb-3">
                   <h2 className='bg-white col-3'>Workout Plan: </h2>
            </div>
            <div className="row mb-5">
                   <form onSubmit={addProjectPlan}>
                    <fieldset >
                      <div className='row'>
                        <label className="form-label  bg-white mb-3 col-3">Add a Workout Plan</label>
                      </div>
                      <div className='row'>
                        <div className='col-5'>
                        <select onChange={handlePlanChange} id="select" className="col-5 form-select">
                            <option className='col-5'>Select a Workout Plan</option>
                            {workoutPlanSelect}
                        </select>
                        </div>
                        <button type="submit" className="btn btn-secondary col-1">Add</button>
                      </div>
                    </fieldset>
                    </form>
            </div>
            <div className="row mb-4">
                   {workoutPlanLink}
                </div>
            </div>
        </div>
    )
}

export default ProjectPlan