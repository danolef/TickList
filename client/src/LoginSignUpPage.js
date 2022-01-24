import { useState, useEffect } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

function LoginSignUpPage({setUser}) {
    
  
    return (
     <div id="login">
         <div className="row">
            <div className="row">
              <h1 className="text-center">TickList</h1>
            </div>
        </div>
         <div className="container-fluid w-75">
         <div className="row mb-5 mt-5">
         <LoginForm setUser={setUser}/>
         </div>
         <div className="row mt-5">
         <SignUpForm setUser={setUser}/>
         </div>
         </div>
     </div>   
    );
  }
  
  export default LoginSignUpPage;