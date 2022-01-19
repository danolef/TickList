import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import ProjectListCard from './ProjectListCard'
import AddProjectList from './AddProjectList'

function ProjectListPage({projectList, setProjecList}) {

    const [addForm, setAddForm] = useState(false)

    // useEffect( () => {
    //     fetch("/project_lists")
    //     .then ((res) => res.json())
    //     .then((projects) => {
    //       setProjecList(projects) 
    //     })
    //   }, [])

      function showAddForm() {
          setAddForm(!addForm)
      }

    const allProjectCards = projectList.map(projectListData => <ProjectListCard key ={projectListData.id} projectListData={projectListData} projectList={projectList} setProjecList={setProjecList}/>)


    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBar/>
                </div>
                <div className="row">
                    <h1>My Projects</h1>
                    <button type="button" className="btn btn-light" onClick={showAddForm}><strong>+</strong></button>
                </div>
                <div className="row">
                    {addForm ? <AddProjectList projectList={projectList} setProjecList={setProjecList}/> : null}
                </div>
                <div className="row">
                    {allProjectCards}
                </div>
            
            </div>
        </div>
    )
}

export default ProjectListPage