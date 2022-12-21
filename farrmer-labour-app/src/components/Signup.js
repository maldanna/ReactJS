import React, { useState } from "react";
import HomePage from "./HomePage";
import { Modal,Button } from "react-bootstrap";
import createPortal from 'react-dom';
import SignupModal from './SignupModal';
import "./SignupStyle.css"
function Signup()
{   
    const [signupData,setsignupData] =useState({});
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setsignupData({
            "email":"maldanna432@gmail.com",
            "password":"1234"
        });
        alert("done");
        console(signupData["email"]);
        console(signupData["password"]);
        setEmail(e.email.value)
    }
    const signupFormSubmit = () =>{
        alert("form submitted");
    }
    return (
        <div class="signup-form">
            <form onSubmit={signupFormSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" name="phone" placeholder="1234567890" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="10"  required/>    
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <div className="d-grid">
                <button type="submit" className="btn btn-primary" > Create Account </button>
                </div>
                <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        </div>
        );
 }
export default Signup;
    // used below link for react input validation
    //https://www.npmjs.com/package/reactjs-input-validator