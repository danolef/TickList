import { useState } from "react";

function UpdateWorkoutPlan({workoutPlansData, workoutPlans, setWorkoutPlans, showUpdateForm, setShowUpdateForm}) {

    const id= workoutPlansData.id
    const [updateWorkoutPlanData, setupdateWorkoutPlanData] = useState({
        name: workoutPlansData.name,
        Description: workoutPlansData.Description,
        Focus: workoutPlansData.Focus,
    })

    function handleUpdateSubmit(e){
        e.preventDefault();
        fetch(`/workout_plans/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateWorkoutPlanData)
      })
      .then(res => res.json())
      .then(updatedWorkoutPlan => {
        setWorkoutPlans(workoutPlans.map(plan => {
              if(plan.id === updatedWorkoutPlan.id){
                  return updatedWorkoutPlan
              } else {
                  return plan
              }
          }))
      })
      setShowUpdateForm(!showUpdateForm)
  }
    

    function handleFormChange(e){
        setupdateWorkoutPlanData({...updateWorkoutPlanData, [e.target.name]:e.target.value})
    }
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" value={updateWorkoutPlanData.name} onChange={handleFormChange} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="Description" value={updateWorkoutPlanData.Description} onChange={handleFormChange} type="text" className="form-control" id="Description"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Focus</label>
                        <input name="Focus" value={updateWorkoutPlanData.Focus} onChange={handleFormChange} type="text" class="form-control" id="Focus"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateWorkoutPlan