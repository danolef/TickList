import NavBar from "./NavBar"

function HomePage({setUser}) {
    return (
      <div> 
        <div className="container-fluid">
          <div className= "row">  
            <NavBar setUser= {setUser}/>
            <h1>HomePage</h1>
           </div> 
           <div className="row">
                <a className="nav-link active" href="/projectlist">My Tick Lists</a>
           </div>
           <div className="row">
                <a className="nav-link active" href="workoutplans">My Workout Plans</a>
           </div>
        </div>
      </div> 
    )
}

export default HomePage