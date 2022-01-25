
import {useState} from "react"
import PhotoCard from "./PhotoCard"

function Photos ({climb}) {

    const[creationPhoto, setCreationPhoto] = useState(null)
    const[photoPublicId, setPhotoPublicId] = useState(null)
    const[photoDisplay, setPhotoDisplay] = useState(null)
    const[photoArr, setPhotoArr] = useState(climb.photos)

    console.log(photoArr)
    
    function photoChangeHandler(e) {
        const photo= e.target.files[0]
        setCreationPhoto(photo)
    }

    function photoSubmitCloud(e) {
        e.preventDefault(e)
        if (creationPhoto instanceof File) {
            const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dcumd5at3/image/upload"
            const formData = new FormData()
            formData.append('file', creationPhoto)
            formData.append('upload_preset', 'ticklistphoto')
            const configObj ={
                method: "POST",
                body: formData
            }
            fetch(cloudinaryUrl, configObj)
            .then(r => {
                // console.log(r)
                if (r.ok) {
                    r.json()
                    .catch(error=> console.log(error))
                    .then(data => {
                        console.log(data)
                        setPhotoPublicId(data.public_id)
                        setPhotoDisplay(data.secure_url)
                        photoSubmitBE(data.public_id, data.secure_url)
                    })
                } else {
                    alert("You did not select a valid image type")
                }
            })
        } else {
            alert("please select an image")
        }
    }

    function photoSubmitBE(id, url) {
        const newPhoto ={
            project_id: climb.id,
            public_id: id,
            photo_url: url
        }
        const configObj ={
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newPhoto)
        }
        fetch("/photos", configObj)
        .then(res => res.json())
        .then(data => setPhotoArr([...photoArr, data]))
    }

    const photoCardDisplay = photoArr.length > 0 ? photoArr.map((photo) => <PhotoCard key ={photo.id} photo={photo} photoArr={photoArr} setPhotoArr={setPhotoArr}/>)
    : null

    return (
        <div>
            <div className="container-fluid">
                <div className="row mb-4">
                    <h2 className="bg-white col-3">Photos</h2>
                </div>
                <div className="row">
                    <form onSubmit={photoSubmitCloud}>
                    <div className="row">
                        <label className="form-label bg-white col-2">Add Photo</label>
                    </div>
                     <div className="row">
                         <div className="col-5">
                        <input onChange={photoChangeHandler} name="photo" type="file" className="form-control col-5" id="photo"/>
                    </div>
                    <button type="submit" className="btn btn-primary col-2">Add</button>
                 </div>
                    </form>
                </div>
                <div className="row mt-5">
                    {photoCardDisplay}
                </div>
            </div>
        </div>
    )
}

export default Photos