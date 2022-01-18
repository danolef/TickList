
function ResourceItem({resource}) {
    
    const id= resource.id

    function handleDelete() {
        fetch(`/resources/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        // .then(() => {
        //     setProjectsArr(projectsArr.filter(p => p.id !== id))
        // })
    }
    
    return (
        <div>
            <div className="row">
                <li>{resource.site_url}</li>
                <a href= "`${resource.site_url}`" className="card-link">Go to Link</a>
                <button onClick={handleDelete} className="btn btn-primary">Delete</button>   
             </div>
        </div>
    )
}

export default ResourceItem