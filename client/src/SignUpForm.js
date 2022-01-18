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
    }
    
  return (
    <div>
    
    <div className="container-fluid">
        <div className="row">
            <div className="row">
              <h5>Are you New?</h5>
              <h5>Sign Up</h5>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
              <label for="Email" className="form-label">Email address</label>
              <input name="email" value={signupData.email} onChange={handleSignupChange} type="email" className="form-control" id="email"/>
          </div>
          <div className="mb-3">
              <label for="username" className="form-label">User Name</label>
              <input name="username" value={signupData.username} onChange={handleSignupChange} type="text" className="form-control" id="username"/>
          </div>
          <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input name="password" value={signupData.password} onChange={handleSignupChange} type="password" className="form-control" id="password"/>
          </div>
          <div className="mb-3">
              <label for="passwordConfirmation" className="form-label">Password Confirmation</label>
              <input name="password_confirmation" value={signupData.password_confirmation} onChange={handleSignupChange} type="password" className="form-control" id="password_confirmation"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
   </div>   
   
  );
}

export default SignUpForm;