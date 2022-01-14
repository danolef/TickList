import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import ProjectCard from './ProjectCard'

function ProjectPage () {

    const [projectsArr, setProjectsArr] = useState([])
    const [addForm, setAddForm] = useState(false)
    const [filteredItemsArr, setFilteredItemsArr] = useState([]);

    useEffect( () => {
        fetch("/projects")
        .then ((res) => res.json())
        .then((projects) => {
          setProjectsArr(projects) 
          setFilteredItemsArr(projects)
          console.log(projects)
        })
      }, [])

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allProjectCards = projectsArr.map(projectData => <ProjectCard key ={projectData.id} projectData={projectData}/>)



    return (
        <div>
            <div class="container">
                <div class="row">
                    <NavBar/>
                </div>
                <div class="row">
                    <h1>Project Name</h1>
                    <button type="button" class="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div class="row">
                    {/* {addForm ? <AddProjectList projectList={projectList} setProjecList={setProjecList}/> : null} */}
                </div>
                <div class="row">
                    {allProjectCards}
                </div>
            
            </div>
        </div>
    )
}


export default ProjectPage