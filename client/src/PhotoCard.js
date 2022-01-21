

function PhotoCard({photo, photoArr, setPhotoArr}) {

    console.log("photo:", photo)
    
    function deletePhoto() {
        const id= photo.id

        const idObj ={
            public_id: photo.public_id
        }

        const configObj ={
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(idObj)
        }
        fetch("/cloudinary/photo/destroy", configObj)
        .then(res => res.json())
        .then((data)=> 
            { 
            console.log(data)
            setPhotoArr(photoArr.filter(p => p.id !== id))
            })
    }

    return (
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="card">
                <img src={photo.photo_url} class="card-img-top" alt="climb photo"/>
                <button type="submit" onClick={deletePhoto} className="btn btn-primary">Delete</button>
            </div>  
          </div>
        </div>
        </>
    )
}

export default PhotoCard