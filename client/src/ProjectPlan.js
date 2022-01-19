import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function ProjectPlan({workoutPlans}) {

    console.log(workoutPlans)

    const [projectPlanArr, setProjectPlanArr] = useState([])
    const {id} = useParams()

    useEffect( () => {
        fetch(`/project_plans/${id}`)
        .then ((res) => res.json())
        .then((projectPlan) => {
            setProjectPlanArr(projectPlan) 
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

      console.log(projectPlanArr)

      const workoutPlanLink = projectPlanArr.length > 0 ? projectPlanArr.map((projectData) => 
        <>
            <h3>{projectData.workout_plan.name}</h3>
            <a href= {`/workoutsessions/${projectData.workout_plan.id}`} className="card-link">Go to Workout Plan</a>
            <button type="button" onClick={()=>handleDelete(projectData.id)} className="btn btn-secondary">Delete</button>

        </>
      )
      : null

    return (
        <div >
            <div className="container-fluid">
            <div className="row ">
                   <h3 className="col">Workout Plan: </h3>
                   <form>
                    <fieldset >
                        <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Add a Workout Plan</label>
                        <select id="disabledSelect" class="form-select">
                            <option>alskdjfj</option>
                            <option>alskaedsfdjfj</option>
                        </select>
                        </div>
                        <div class="mb-3">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                    </form>
                   {workoutPlanLink}
                </div>
            </div>
        </div>
    )
}

export default ProjectPlan