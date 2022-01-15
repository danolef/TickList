import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import ProjectCard from './ProjectCard'
import AddProject from './AddProject'

function ProjectPage ({setProjectId, projectsArr, setProjectsArr}) {

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

      const name= (projectsArr[0])
      console.log(projectsArr)

    const allProjectCards = projectsArr.map((projectData) => <ProjectCard key ={projectData.id} projectData={projectData} setProjectId={setProjectId}/>
    )



    return (
        <div>
            <div class="container">
                <div class="row">
                    <NavBar/>
                </div>
                <div class="row">
                    {/* <h1>{name}</h1> */}
                    <button type="button" class="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div class="row">
                    {addForm ? <AddProject projectsArr={projectsArr} setProjectsArr={setProjectsArr}/> : null}
                </div>
                <div class="row">
                    {allProjectCards}
                </div>
            
            </div>
        </div>
    )
}


export default ProjectPage