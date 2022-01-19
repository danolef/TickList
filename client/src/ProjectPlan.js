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
            <h3>{projectData.workout_plan.name}</h3>
            <Link to= {`/workoutsessions/${projectData.workout_plan.id}`} className="card-link">Go to Workout Plan</Link>
            <button type="button" onClick={()=>handleDelete(projectData.id)} className="btn btn-secondary">Delete</button>

        </>
      )
      : null

      const workoutPlanSelect = workoutPlans.map(plan => <>
        <option key={plan.id} value={plan.id}>{plan.name}</option>
      </>)

    return (
        <div >
            <div className="container-fluid">
            <div className="row ">
                   <h3 className="col">Workout Plan: </h3>
                   <form onSubmit={addProjectPlan}>
                    <fieldset >
                        <div className="mb-3">
                        <label className="form-label">Add a Workout Plan</label>
                        <select onChange={handlePlanChange} id="select" className="form-select">
                            <option>Select a Workout Plan</option>
                            {workoutPlanSelect}
                        </select>
                        </div>
                        <div className="mb-3">
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                    </form>
                   {workoutPlanLink}
                </div>
            </div>
        </div>
    )
}

export default ProjectPlan