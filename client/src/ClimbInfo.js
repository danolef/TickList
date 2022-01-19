
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import ResourceItem from './ResourceItem'
import UpDateProject from './UpDateProject'
import ProjectPlan from './ProjectPlan'

function ClimbInfo({workoutPlans, projectsArr, setProjectsArr}) {

    const [climb, setClimb] = useState([])
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showAddResourceForm, setshowAddResourceForm] = useState(false)
    const {id} = useParams()
    const [resourceFormData, setResourceFormData] = useState({
        site_url: "",
    })
  
    console.log(climb)

    useEffect( () => {
        fetch(`/projects/${id}`)
        .then ((res) => res.json())
        .then((project) => {
          setClimb(project) 
        })
      }, [])

      function handleAddResourceSubmit(e) {
        e.preventDefault();
        fetch(`/projects/${id}/resources`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resourceFormData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newResource) => {
                console.log(newResource)
                // setWorkoutPlans([newWorkoutPlan, ...workoutPlans])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
    }
      
      function handleShowUpdateForm() {
        setShowUpdateForm(!showUpdateForm)
    }

    function handleShowAddResourceForm() {
        setshowAddResourceForm(!showAddResourceForm)
    }

    function handleFormChange(e){
        setResourceFormData({...resourceFormData, [e.target.name]:e.target.value})
    }
      
      if (climb.length === 0) {
          return <h2>Loading. . .</h2>
        }
        
    const climbResource= climb.resources.map(resource => <ResourceItem key={resource.id} resource={resource}/>)
       

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    <h1>Climb Info</h1>
                </div>
                <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary">Edit</button>
                            {showUpdateForm ? <UpDateProject climb={climb} setClimb={setClimb} projectsArr={projectsArr} setProjectsArr={setProjectsArr}/>
                            : null}
                <div className="row">
                   <h2>Name: {climb.climb.name}</h2>
                </div>
                <div className="row">
                   <h3>Completed: {climb.completed ? "yes" : "no"} </h3>
                </div>
                <div className="row ">
                   <h3 className="col">Location: {climb.climb.location}</h3>
                   <h3 className="col">Grade: {climb.climb.grade}</h3>
                   <h3 className="col">Climb Type: {climb.climb.climb_type}</h3>
                </div>
                <div className="row ">
                   <h3 className="col">Climb Attributes: {climb.climb.climb_attribute}</h3>
                </div>
                <div className="row ">
                   <h3 className="col">Beta: {climb.beta}</h3>
                </div>
                <div className="row ">
                   <h3 className="col">Resources: </h3>
                   <button type="submit" onClick={handleShowAddResourceForm} className="btn btn-primary">Add Resource</button>
                   {showAddResourceForm ? 
                      <div className="row">
                     <form onSubmit={handleAddResourceSubmit}>
                     <div className="mb-3">
                         <label for="site_url" className="form-label">Site Url</label>
                         <input name="site_url" value={resourceFormData.site_url} onChange={handleFormChange} type="text" className="form-control" id="site_url"/>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>

                    : null

                   }
                   <ul>
                    {climbResource}
                   </ul>
                </div>
                <ProjectPlan workoutPlans={workoutPlans}/>
            </div>
        </div>
    )
}


export default ClimbInfo