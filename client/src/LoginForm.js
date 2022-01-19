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
    <div className="container-fluid">
        <div className="row">
            <div className="row">
              <h1>TickList</h1>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="row">
              <h5>Already have an account?</h5>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
              <label className="form-label">User Name</label>
              <input value={loginData.username} name="username" onChange={handleLoginChange} type="text" className="form-control" id="username"/>
          </div>
          <div className="mb-3">
              <label className="form-label">Password</label>
              <input value={loginData.password} name="password" onChange={handleLoginChange} type="password" className="form-control" id="password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
   </div>   
   
  );
}

export default LoginForm;