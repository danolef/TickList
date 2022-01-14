import NavBar from "./NavBar"

function HomePage({setUser}) {
    return (
      <div> 
        <div class="container-fluid">
          <div class= "row">  
            <NavBar setUser= {setUser}/>
            <h1>HomePage</h1>
           </div> 
           <div class="row">
                <a class="nav-link active" href="#">My Tick Lists</a>
           </div>
           <div class="row">
                <a class="nav-link active" href="#">My Workout Plans</a>
           </div>
        </div>
      </div> 
    )
}

export default HomePage