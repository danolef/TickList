import { useState } from "react";

function AddWorkoutPlan({workoutPlans, setWorkoutPlans}) {

    const [workoutFormData, setWorkoutFormData] = useState({
        name: '',
        Description: '',
        Focus: '',
    })

    function handleSignupSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch("/workout_plan", {
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
    }

    function handleSignupChange(e){
        setWorkoutFormData({...workoutFormData, [e.target.name]:e.target.value})
    }

    return(
       <div>
        <div className="container-fluid">
          <div className="row">
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" value={workoutPlans.name} onChange={handleSignupChange} type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input name="Description" value={workoutPlans.Description} onChange={handleSignupChange} type="text" className="form-control" id="Description"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Focus</label>
                <input name="Focus" value={workoutPlans.Focus} onChange={handleSignupChange} type="text" className="form-control" id="Focus"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>

    )
}

export default AddWorkoutPlan