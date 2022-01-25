
import {useParams, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import ResourceItem from './ResourceItem'
import UpDateProject from './UpDateProject'
import ProjectPlan from './ProjectPlan'
import Photos from './Photos'

function ClimbInfo({workoutPlans, setWorkoutPlans}) {

    const [climb, setClimb] = useState([])
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showAddResourceForm, setshowAddResourceForm] = useState(false)
    const [resources, setResources] = useState([])
    const {id} = useParams()
    const [resourceFormData, setResourceFormData] = useState({
        site_url: "",
    })

    let history = useHistory()
  
    useEffect( () => {
        fetch(`/projects/${id}`)
        .then ((res) => res.json())
        .then((project) => {
          setClimb(project)
          setResources(project.resources) 
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
                setResources([...resources, newResource])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        setshowAddResourceForm(!showAddResourceForm)
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

    function handleGoBack() {
      history.goBack()
  }
      
      if (climb.length === 0) {
          return <h2>Loading. . .</h2>
        }
        
    const climbResource= resources.map(resource => <ResourceItem  resources={resources} setResources={setResources} key={resource.id} resource={resource}/>)
       

    return (
        <div id="climbpage">
            <div className="container-fluid">
                <div className="row bg-white fixed-top mb-5">
                    <NavBar/>
                </div>
                <div className="row mt-5">
                    <h1>Climb Info</h1>
                </div>
                <button type="button" onClick={handleShowUpdateForm} className="btn btn-secondary mt-3 mb-3 col-2">Edit</button>
                            {showUpdateForm ? <UpDateProject climb={climb} setClimb={setClimb} showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm}/>
                            : null}
                <div className="row mb-3 ms-1 col-5 bg-white">
                   <h2>Name: {climb.climb.name}</h2>
                </div>
                <div className="row mb-2 ms-1 bg-white col-3 ">
                   <h3>Completed: {climb.completed ? "yes" : "no"} </h3>
                </div>
                <div className="row mb-2 ">
                   <h3 className="col mb-2 ms-3 me-3 bg-white">Location: {climb.climb.location}</h3>
                   <h3 className="col mb-2 bg-white">Grade: {climb.climb.grade}</h3>
                   <h3 className="col mb-2 ms-3 me-3 bg-white">Climb Type: {climb.climb.climb_type}</h3>
                </div>
                <div className="row mb-2">
                   <h3 className="col-6 ms-3 bg-white">Climb Attributes: {climb.climb.climb_attribute}</h3>
                </div>
                <div className="row mb-2">
                   <h3 className="col-10 ms-3 bg-white">Beta: {climb.beta}</h3>
                </div>
                <div className="row mb-2">
                  <div className='row'>
                   <h3 className="ms-3 bg-white col-2">Resources: </h3>
                   </div>
                   <button type="submit" onClick={handleShowAddResourceForm} className="btn btn-secondary mt-3 mb-3 ms-3 col-2">Add Resource</button>
                   {showAddResourceForm ? 
                      <div className="row mb-3">
                     <form onSubmit={handleAddResourceSubmit}>
                     <div className="mb-3">
                         <label className="form-label">Site Url</label>
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
                <ProjectPlan workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans}/>
                <div className='row'>
                   <Photos climb={climb}/>
                </div>
                <button type="button" className="btn btn-light mt-5 mb-5" onClick={handleGoBack}><strong>Back</strong></button>
              </div>
        </div>
    )
}


export default ClimbInfo