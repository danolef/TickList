import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'
import ProjectListCard from './ProjectListCard'
import AddProjectList from './AddProjectList'

function ProjectListPage({projectList, setProjecList}) {
    
    let history = useHistory()
    const [addProjectListForm, setAddProjectListForm] = useState(false)

    useEffect( () => {
        fetch("/project_lists")
        .then ((res) => res.json())
        .then((projects) => {
          setProjecList(projects) 
        })
      }, [])

      function showAddProjectListForm() {
        setAddProjectListForm(!addProjectListForm)
      }

      function handleGoBack() {
        history.push("/home")
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
                    <button type="button" className="btn btn-light" onClick={showAddProjectListForm}><strong>+</strong></button>
                </div>
                <div className="row">
                    {addProjectListForm ? <AddProjectList projectList={projectList} setProjecList={setProjecList} addProjectListForm={addProjectListForm} setAddProjectListForm={setAddProjectListForm}/> : null}
                </div>
                <div className="row">
                    {allProjectCards}
                </div>
                <button type="button" className="btn btn-light" onClick={handleGoBack}><strong>Back</strong></button>
            </div>
        </div>
    )
}

export default ProjectListPage