
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"

function ClimbInfo(projectsArr, setProjectsArr, projectId) {

    const [climb, setClimb] = useState([])
    const {id} = useParams()
  

    useEffect( () => {
        fetch(`/projects/${id}`)
        .then ((res) => res.json())
        .then((project) => {
          setClimb(project) 
        })
      }, [])

      console.log(climb.length)
      const completed = climb.completed

      if (climb.length === 0) {
          return <h2>Loading. . .</h2>
      }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <NavBar/>
                </div>
                <div class="row">
                    <h1>Climb Info</h1>
                </div>
                <div class="row">
                   <h2>Name: {climb.climb.name}</h2>
                </div>
                <div class="row">
                   <h3>Completed: </h3>
                </div>
                <div class="row ">
                   <h3 class="col">Location: </h3>
                   <h3 class="col">Grade: </h3>
                   <h3 class="col">Climb Type: </h3>
                </div>
                <div class="row ">
                   <h3 class="col">Climb Attributes: </h3>
                </div>
                <div class="row ">
                   <h3 class="col">Beta: </h3>
                </div>
                <div class="row ">
                   <h3 class="col">Resources: </h3>
                   <ul>

                   </ul>
                </div>
                <div class="row ">
                   <h3 class="col">Workout Plan: </h3>
                   <a href= " " class="card-link">Workout Plan</a>
                </div>
            </div>
        </div>
    )
}


export default ClimbInfo