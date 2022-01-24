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
            <div className="row mb-3">
              <h5 className="text-center">Are you New? Sign Up</h5>
              {/* <h5>Sign Up</h5> */}
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
        <form className="row d-flex justify-content-center" onSubmit={handleSignupSubmit}>
          <div className="col-6 mb-4">
              {/* <label className="form-label">Email address</label> */}
              <input name="email" placeholder="Email Address" value={signupData.email} onChange={handleSignupChange} type="email" className="form-control text-center" id="email"/>
          </div>
          <div className="col-6 mb-4">
              {/* <label className="form-label">User Name</label> */}
              <input name="username" placeholder="User Name" value={signupData.username} onChange={handleSignupChange} type="text" className="form-control text-center" id="username"/>
          </div>
          <div className="col-6 mb-4">
              {/* <label className="form-label">Password</label> */}
              <input name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} type="password" className="form-control text-center" id="password"/>
          </div>
          <div className="col-6 mb-4">
              {/* <label className="form-label">Password Confirmation</label> */}
              <input name="password_confirmation" placeholder="Password Confirmation" value={signupData.password_confirmation} onChange={handleSignupChange} type="password" className="form-control text-center" id="password_confirmation"/>
          </div>
          <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-3 mb-5 border border-dark" id="button">Submit</button>
          </div>
        </form>
        </div>
    </div>
   </div>   
   
  );
}

export default SignUpForm;