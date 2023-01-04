import {React,useState,memo } from 'react';

import SignupModal from './SignupModal';
import {getToken,getUserPhone} from './UserInfo';
function Profile(){

    const [profileData,setprofileData] =useState({ phone: '',password: '',photo:'',name:'',email:''});

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
            <form onSubmit={profileFormSubmit}>

            <h3>Profile</h3>

            <div className="row">
                <div className="col-6"> 
                    <label htmlFor="photo">Photo:</label>
                    <input type="file" name="photo" accept="image/*" onChange={handleChange} />
                </div>

            </div>

            <div className="row">
                <div className="col-3"> 
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/>    
                </div>
                <div className="col-3"> 
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={profileData.email} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/> 
                </div>
            </div>

            <div className="row">
                <div className="col-3"> 
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/>    
                </div>
                <div className="col-3"> 
                    <label>password</label>
                    <input type="text" className="form-control" name="password" value={profileData.name} onChange={handleChange} placeholder="Enter Your Phone Number" maxlength="50"  required/> 
                </div>
            </div>

            <div className="d-grid">
                <div className="row">
                    <div className="col-3"> <button type="submit" className="btn btn-primary" >Submit</button></div>
                    <div className="col-3"> <button type="button" className="btn btn-danger" onClick={handleCancel} >Cancel</button></div>
                </div>
            </div>
            </form>
        </>
    );
}
export default memo(Profile);