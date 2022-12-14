import React, { useState } from "react";
import HomePage from "./HomePage";
import { Modal,Button } from "react-bootstrap";
import createPortal from 'react-dom';
import SignupModal from './SignupModal';
function Signup()
 {
    return( <>
        <SignupModal />
        </>
    );
 }
export default Signup;
    // used below link for react input validation
    //https://www.npmjs.com/package/reactjs-input-validator