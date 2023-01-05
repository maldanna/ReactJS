import {React,useState,memo } from 'react';

import SignupModal from './SignupModal';
import {getToken,getUserPhone} from './UserInfo';
import "./ProfileStyle.css";
function Profile(){

    const [profileData,setprofileData] =useState({ phone: '',password: '',image:'',name:'',email:''});

    var userPhone=getUserPhone();
    const profileFormSubmit = (event) => {
        console.log("profile updated successfully !!");
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setprofileData({ ...profileData, [name]: value });
      };

      const handleCancel = (event) => {
        alert("habdle cancel");
      };


    return(
        <>
        <div className="profile-form">
            <form onSubmit={profileFormSubmit}>

            <h3>Profile</h3>

            <div className="row">
                <div className="col-6"> 
                    <img src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg" style={{borderRadius: '50%', width: '200px', height: '200px'}} />
                </div>
            </div>
            <div className="row">
                <div className="col-6"> 
                    <label htmlFor="photo">Update Photo:</label>
                    <input type="file" name="photo" accept="image/*" onChange={handleChange} />
                </div>
            </div>

                <div className="row">
                    <div className="col-6"> 
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/>    
                    </div>
                    <div className="col-6"> 
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" value={profileData.email} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-6"> 
                        <label>Phone</label>
                        <input type="text" className="form-control" name="phone" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/>    
                    </div>
                    <div className="col-6"> 
                        <label>password</label>
                        <input type="text" className="form-control" name="password" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/> 
                    </div>
                </div>
            <br></br>
           
            <div className="row" style={ {width: '200px', height: '50px',padding:'7px'}}>
                <div className="col-5"> <button type="submit" className="btn btn-primary" > save </button></div>
                <div className="col-7"> <button type="button" className="btn btn-danger" onClick={handleCancel} > Cancel </button></div>
            </div>

            
            </form>
        </div>
        </>
    );
}
export default memo(Profile);