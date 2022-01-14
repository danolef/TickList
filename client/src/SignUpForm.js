import { useState, useEffect } from "react";


function SignUpForm({setUser}) {
  
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
  
    function handleSignupSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((user) => {
              setUser(user)
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
    }

    function handleSignupChange(e){
        setSignupData({...signupData, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }
  return (
    <div>
    
    <div class="container-fluid">
        <div class="row">
            <div class="row">
              <h5>Are you New?</h5>
              <h5>Sign Up</h5>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
        <form onSubmit={handleSignupSubmit}>
          <div class="mb-3">
              <label for="Email" class="form-label">Email address</label>
              <input name="email" value={signupData.email} onChange={handleSignupChange} type="email" class="form-control" id="email"/>
          </div>
          <div class="mb-3">
              <label for="username" class="form-label">User Name</label>
              <input name="username" value={signupData.username} onChange={handleSignupChange} type="text" class="form-control" id="username"/>
          </div>
          <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input name="password" value={signupData.password} onChange={handleSignupChange} type="password" class="form-control" id="password"/>
          </div>
          <div class="mb-3">
              <label for="passwordConfirmation" class="form-label">Password Confirmation</label>
              <input name="password_confirmation" value={signupData.password_confirmation} onChange={handleSignupChange} type="password" class="form-control" id="password_confirmation"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
   </div>   
   
  );
}

export default SignUpForm;