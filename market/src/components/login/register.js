// import { Ra } from "tabler-icons-react"
import axios from 'axios';
import React from "react"
import './register.css'
import { Link } from 'react-router-dom';
const Register=()=>{


  let viewdata={
    name:'',
    email:'',
    password:'',
    passwordconfirm:''
  }
const registeruser=async(Event)=>{
  Event.preventDefault();
    viewdata.name= Event.target[0].value;
    viewdata.email= Event.target[1].value;
    viewdata.password= Event.target[2].value;
    viewdata.passwordconfirm= Event.target[3].value;




    const getback=axios.post('http://localhost:3000/api/v1/users/signup',viewdata);
    console.log(getback);

    

}

    return(

<form onSubmit={registeruser} >
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
   
    <label htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account?<Link to="/welcome" weight={700} >
            Register
          </Link>.</p>
  </div>
</form>
    )
}


export default Register;