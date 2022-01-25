import { Link } from "react-router-dom";

function ResourceItem({resource, resources, setResources}) {
    
    const id= resource.id

    function handleDelete() {
        fetch(`/resources/${id}`, {
            method: "DELETE",
            headers:{'Content-Type' : 'application/json'}
        })
        .then(() => {
            setResources(resources.filter(p => p.id !== id))
        })
    }
    
    return (
        <div>
            <div className="row mt-3 mb-3 me-3 ">
                <li className="col-9 bg-white ms-3"><strong>{resource.site_url}</strong></li>
                {/* <a href= "`${resource.site_url}`" className="card-link">Go to Link</a> */}
                {/* <Link to= "`${resource.site_url}`" className="card-link">Go to Link</Link> */}
                <button onClick={handleDelete} className="btn btn-secondary col-2">Delete</button>   
             </div>
        </div>
    )
}

export default ResourceItem