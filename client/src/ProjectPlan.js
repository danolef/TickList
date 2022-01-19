import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function ProjectPlan() {

    const [projectPlanArr, setProjectPlanArr] = useState([])
    const {id} = useParams()

    useEffect( () => {
        fetch(`/project_plans/${id}`)
        .then ((res) => res.json())
        .then((projectPlan) => {
            setProjectPlanArr(projectPlan) 
        })
      }, [])

      console.log(projectPlanArr)

      const workoutPlanLink = projectPlanArr.length > 0 ? projectPlanArr.map((projectData) => 
        <>
            <h3>{projectData.workout_plan.name}</h3>
            <a href= {`/workoutsessions/${projectData.workout_plan.id}`} className="card-link">Go to Workout Plan</a>
            <button type="button" className="btn btn-secondary">Delete</button>

        </>
      )
      : null

    return (
        <div >
            <div className="container-fluid">
            <div className="row ">
                   <h3 className="col">Workout Plan: </h3>
                   
                   {workoutPlanLink}
                </div>
            </div>
        </div>
    )
}

export default ProjectPlan