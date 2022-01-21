

function PhotoCard({photo}) {

    return (
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="card">
                <img src={photo.photo_url} class="card-img-top" alt="climb photo"/>
                <button type="submit" className="btn btn-primary">Delete</button>
            </div>  
          </div>
        </div>
        </>
    )
}

export default PhotoCard