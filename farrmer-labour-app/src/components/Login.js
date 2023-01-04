import React, { useState } from 'react';
import { SpringBootURLData } from './SpringBootURLData';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {setToken,setUserPhone} from "./UserInfo"
import "./LoginStyle.css";

function Login() {
    const [loginData,setloginData] =useState({ phone: '',password: ''});
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setloginData({ ...loginData, [name]: value });
      };
      /* submit form to spring boot application */
    const loginSubmit = (event) => {
        
        event.preventDefault();
        console.log(loginData);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Access-Control-Allow-Origin", "*"); myHeaders.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");myHeaders.append("Access-Control-Allow-Headers", "X-Token");
        var raw = JSON.stringify(loginData);
        var requestOptions = { method: SpringBootURLData.login.method,headers: myHeaders,body: raw };
        fetch(SpringBootURLData.login.url, requestOptions)
        .then(response => response.text())
        .then(result => {
                var token=JSON.parse(result).token; // var willl available entire function and where let will availbale in specific block in which it is declared
                setToken(token);
                setUserPhone(loginData.phone);
               // Cookies.set('jwtToken', token);
               // Cookies.set('userPhone', loginData.phone);
             }
            )
        .catch(error => console.log('error', error));
    }

    function handleCancel() {
        navigate('/');
    }

  return (
    <div className="login-form">
    <form onSubmit={loginSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
            <label>Phone</label>
            <input type="text" className="form-control" name="phone" onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/>    
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
        Not registered yet!! <a href="/signup">sign up?</a>
        </p>
    </form>
</div>
);
}
export default Login;

