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
          <div className="container">
            <div className="row">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Home</Link>
                <Link className="navbar-brand" to="/projectlist">Tick Lists</Link>
                <Link className="navbar-brand" to="/workoutplans">Workout Plans</Link>
                <button onClick={handleLogout}>
                    Log Out
                </button>
              </div>
            </nav>
            </div>
          </div>
        </div>
    )
}

export default NavBar