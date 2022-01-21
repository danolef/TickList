import { useHistory, Link } from "react-router-dom";

function NavBar({setUser}) {
  
  let history = useHistory();
    
    function handleLogout(e) {
        console.log(e)
        fetch("/logout", {method: "DELETE"})
        .then((res) => {
          if (res.ok) {
            setUser(null)
          }
        })
        history.push("/")
      }
    

    return (
        <div>
          <div className="container-fluid">
            <div className="row flex-nowrap">
            {/* <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"> */}
           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
           <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand " to="/home">Home</Link>
                <Link className="navbar-brand" to="/projectlist">Tick Lists</Link>
                <Link className="navbar-brand" to="/workoutplans">Workout Plans</Link>
                <button onClick={handleLogout}>
                    Log Out
                </button>
                </div>
            </nav>
            {/* </div> */}
            {/* </div> */}
            </div>
          </div>
        </div>
    )
}

export default NavBar