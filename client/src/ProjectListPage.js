import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import ProjectListCard from './ProjectListCard'
import AddProjectList from './AddProjectList'

function ProjectListPage() {

    const [projectList, setProjecList] = useState([])
    const [addForm, setAddForm] = useState(false)

    useEffect( () => {
        fetch("/project_lists")
        .then ((res) => res.json())
        .then((projects) => {
          setProjecList(projects) 
        })
      }, [])

      console.log(projectList)

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allProjectCards = projectList.map(projectListData => <ProjectListCard key ={projectListData.id} projectListData={projectListData}/>)



    return (
        <div>
            <div class="container">
                <div class="row">
                    <NavBar/>
                </div>
                <div class="row">
                    <h1>My Projects</h1>
                    <button type="button" class="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div class="row">
                    {addForm ? <AddProjectList projectList={projectList} setProjecList={setProjecList}/> : null}
                </div>
                <div class="row">
                    {allProjectCards}
                </div>
            
            </div>
        </div>
    )
}

export default ProjectListPage