import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import ProjectCard from './ProjectCard'
import AddProject from './AddProject'

function ProjectPage ({setProjectId, projectsArr, setProjectsArr}) {

    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [addForm, setAddForm] = useState(false)
    const {id} = useParams()
  
    
      function showAddForm() {
          setAddForm(!addForm)
      }

      useEffect( () => {
        fetch(`/project_lists/${id}`)
        .then ((res) => res.json())
        .then((projects) => {
          setProjectsArr(projects) 
        })
      }, [])

    //   if (projectsArr.length === 0) {
    //     return <h2>Loading. . .</h2>
    //   }


        const allProjectCards = projectsArr.length > 0 ? projectsArr.map((projectData) => <ProjectCard key ={projectData.id} projectData={projectData} setProjectId={setProjectId} projectsArr={projectsArr} setProjectsArr={setProjectsArr}/>)
      : null
      
        // const projetListName = projectsArr.length > 0 ? projectsArr.project_list.name : null
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    {/* <h1>{projetListName}</h1> */}
                    <button type="button" className="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddProject projectListId={id} projectsArr={projectsArr} setProjectsArr={setProjectsArr}/> : null}
                </div>
                <div className="row">
                    {allProjectCards}
                </div>
            
            </div>
        </div>
    )
}


export default ProjectPage