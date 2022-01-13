import { useState, useEffect } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'

function LoginSignUpPage({setUser}) {
    
  
    return (
     <div>
         <LoginForm setUser={setUser}/>
         <SignUpForm setUser={setUser}/>
     </div>   
    );
  }
  
  export default LoginSignUpPage;