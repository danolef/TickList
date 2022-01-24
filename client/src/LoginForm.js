import { useState, useEffect } from "react";


function LoginForm({setUser}) {
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
})

  function handleLoginSubmit(e){
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
        })
      } else {
        res.json()
        .then ((errors) => {
          console.error(errors)
        })
      }
    })
  }

  function handleLoginChange(e){
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }

  return (
    <div>
       <div className="container-fluid ">
            <div className="row col-12 mb-3">
              <h5 className= "d-flex justify-content-center">Already have an account?</h5>   
        </div>
    </div >
        <div className="row">
        <form className="row  d-flex justify-content-center" onSubmit={handleLoginSubmit}>
          <div className="col-3 ">
              {/* <label className="form-label">User Name</label> */}
              <input value={loginData.username} placeholder="User Name" name="username" onChange={handleLoginChange} type="text" className="form-control text-center" id="username"/>
          </div>
          <div className="col-3 mb-5">
              {/* <label className="form-label">Password</label> */}
              <input value={loginData.password} placeholder="Password" name="password" onChange={handleLoginChange} type="password" className="form-control text-center" id="password"/>
          </div>
          <div className="row d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-3 border border-dark">Submit</button>
          </div>
        </form>
        </div>
   </div>   
   
  );
}

export default LoginForm;