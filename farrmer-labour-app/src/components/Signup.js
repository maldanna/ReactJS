import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./SignupStyle.css";
import { SpringBootURLData } from "./SpringBootURLData";
function Signup()
{   
    const [signupData,setsignupData] =useState({ name: '', email: '' ,phone: '',password: ''});
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setsignupData({ ...signupData, [name]: value })

      };
      /* submit form to spring boot application */
    const signupFormSubmit = (event) => {
        event.preventDefault();
        console.log(signupData);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Access-Control-Allow-Origin", "*"); myHeaders.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");myHeaders.append("Access-Control-Allow-Headers", "X-Token");
        var raw = JSON.stringify(signupData);
        var requestOptions = { method: SpringBootURLData.register.method,headers: myHeaders,body: raw };
        fetch(SpringBootURLData.register.url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    function handleCancel() {
        navigate('/');
    }

    return (
        <div className="signup-form">
            <form onSubmit={signupFormSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="Enter Your Name" maxlength="50"  required/>    
                </div>
                <div className="mb-3">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" name="phone" onChange={handleChange}  placeholder="1234567890" maxLength="10"  required/>    
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange}  placeholder="abc@gmail.com" maxLength="50"  required/>    
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange}  placeholder="Enter password" required />
                </div>
                <div className="d-grid">
                <div className="row">
                    <div className="col-3"> <button type="submit" className="btn btn-primary" >Submit</button></div>
                    <div className="col-3"> <button type="button" className="btn btn-danger" onClick={handleCancel} >Cancel</button></div>
                </div>

                </div>
                <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        </div>
        );
 }
export default Signup;

