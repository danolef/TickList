import { useHistory } from "react-router-dom";

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
                <a className="navbar-brand" href="/home">Home</a>
                <a className="navbar-brand" href="/projectlist">Tick Lists</a>
                <a className="navbar-brand" href="/workoutplans">Workout Plans</a>
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