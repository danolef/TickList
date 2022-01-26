import { useState } from "react";

function AddWorkoutPlan({workoutPlans, setWorkoutPlans, addForm, setAddForm}) {

    const [workoutFormData, setWorkoutFormData] = useState({
        name: '',
        Description: '',
        Focus: '',
    })

    function handleSignupSubmit(e){
        e.preventDefault();
        fetch("/workout_plans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workoutFormData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((newWorkoutPlan) => {
                setWorkoutPlans([newWorkoutPlan, ...workoutPlans])
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        setAddForm(!addForm)
    }

    function handleSignupChange(e){
        setWorkoutFormData({...workoutFormData, [e.target.name]:e.target.value})
    }

    return(
       <div>
        <div className="container-fluid">
          <div className="row">
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3 col-6">
                {/* <label className="form-label">Name</label> */}
                <input name="name" placeholder="Name" value={workoutPlans.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3 col-6">
                {/* <label className="form-label">Description</label> */}
                <textarea name="Description" placeholder="Description" value={workoutPlans.Description} onChange={handleSignupChange} type="text" className="form-control" id="Description"/>
            </div>
            <div className="mb-3 col-6">
                {/* <label className="form-label">Focus</label> */}
                <input name="Focus" placeholder="Focus" value={workoutPlans.Focus} onChange={handleSignupChange} type="text" className="form-control" id="Focus"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>

    )
}

export default AddWorkoutPlan