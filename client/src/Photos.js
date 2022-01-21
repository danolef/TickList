
import {useState} from "react"

function Photos () {

    const[creationPhoto, setCreationPhoto] = useState(null)
    
    function photoChangeHandler(e) {
        const photo= e.target.files[0]
        setCreationPhoto(photo)
    }

    function photoSubmit(e) {
        e.preventDefault(e)
        if (creationPhoto instanceof File){
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
                console.log(r)
            })
        }
    }


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <h2>Photos</h2>
                </div>
                <div className="row">
                    <form onSubmit={photoSubmit}>
                    <label className="form-label">Add Photo</label>
                    <input onChange={photoChangeHandler} name="photo" type="file" className="form-control" id="photo"/>
                    <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Photos