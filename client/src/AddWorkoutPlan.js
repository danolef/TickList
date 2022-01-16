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
        fetch("/project_lists", {
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
        console.log(e.target.value)
    }

    return(
       <div>
        <div class="container-fluid">
          <div class="row">
          <form onSubmit={handleSignupSubmit}>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input name="name" value={workoutPlans.name} onChange={handleSignupChange} type="text" class="form-control" id="name"/>
            </div>
            <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <input name="Description" value={workoutPlans.Description} onChange={handleSignupChange} type="text" class="form-control" id="Description"/>
            </div>
            <div class="mb-3">
                <label for="Focus" class="form-label">Focus</label>
                <input name="Focus" value={workoutPlans.Focus} onChange={handleSignupChange} type="text" class="form-control" id="Focus"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>

    )
}

export default AddWorkoutPlan