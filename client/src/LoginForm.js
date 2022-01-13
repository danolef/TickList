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
    console.log(e.target.value)
  }

  return (
    <div>
    <div class="container-fluid">
        <div class="row">
            <div class="row">
              <h1>TickList</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="row">
              <h5>Already have an account?</h5>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
        <form onSubmit={handleLoginSubmit}>
          <div class="mb-3">
              <label for="username" class="form-label">User Name</label>
              <input value={loginData.username} name="username" onChange={handleLoginChange} type="text" class="form-control" id="username"/>
          </div>
          <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input value={loginData.password} name="password" onChange={handleLoginChange} type="password" class="form-control" id="password"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
   </div>   
   
  );
}

export default LoginForm;