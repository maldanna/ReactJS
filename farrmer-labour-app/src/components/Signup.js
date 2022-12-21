import React, { useState } from "react";
import HomePage from "./HomePage";
import { Modal,Button } from "react-bootstrap";
import createPortal from 'react-dom';
import SignupModal from './SignupModal';
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
    return (
        < Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <div className="auth-form-container">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            <label htmlFor="password">password</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            <br />
                            <br />
                            <button class="btn btn-success" type="submit">Submit</button>
                        </form>
                    </div>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
            </Modal.Footer>
        </Modal>
        );
 }
export default Signup;
    // used below link for react input validation
    //https://www.npmjs.com/package/reactjs-input-validator