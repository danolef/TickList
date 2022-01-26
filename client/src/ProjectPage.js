import { useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import NavBar from './NavBar'
import ProjectCard from './ProjectCard'
import AddProject from './AddProject'

function ProjectPage ({projectList, setProjectId, projectsArr, setProjectsArr}) {

    let history= useHistory()
    const [addForm, setAddForm] = useState(false)
    const {id} = useParams()

      useEffect( () => {
        fetch(`/project_lists/${id}`)
        .then ((res) => res.json())
        .then((projects) => {
          setProjectsArr(projects) 
        })
      }, [])

      
    function handleGoBack() {
        history.push("/projectlist")
    }

      function showAddForm() {
        setAddForm(!addForm)
    }

        const allProjectCards = projectsArr.length > 0 ? projectsArr.map((projectData) => <ProjectCard key ={projectData.id} projectData={projectData} setProjectId={setProjectId} projectsArr={projectsArr} setProjectsArr={setProjectsArr}/>)
            : null
      
        const projetListName = projectsArr.length > 0 ? 
            <>
            <h1>{projectsArr[0].project_list.name}</h1>
            </>
            : 
            <>
            <h2>Add Your First Project</h2>
            </>

    return (
        <div id="projectpage">
            <div className="container-fluid">
                <div className="row bg-white fixed-top">
                    <NavBar/>
                </div>
                <div className="row mt-5">
                    {projetListName}
                    <button type="button" className="btn btn-light col-4 mt-5 mb-4 ms-4" onClick={showAddForm}><strong>+ADD</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddProject projectListId={id} projectsArr={projectsArr} setProjectsArr={setProjectsArr} addForm={addForm} setAddForm={setAddForm}/> : null}
                </div>
                <div className="row mt-4">
                    {allProjectCards}
                </div>
                
                <button type="button" className="btn btn-light mt-5 mb-5 ms-4" onClick={handleGoBack}><strong>Back</strong></button>
                
            </div>
        </div>
    )
}


export default ProjectPage