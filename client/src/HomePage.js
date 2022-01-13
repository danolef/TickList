import NavBar from "./NavBar"

function HomePage({setUser}) {
    return (
       <div> 
        <NavBar setUser={setUser}/>
        <h1>HomePage</h1>
       </div> 
    )
}

export default HomePage