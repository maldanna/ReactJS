import {React,memo} from 'react';
import SignupModal from './SignupModal';
function Profile(){
    return(
        <>
            <div> profile page </div>
            <SignupModal />
        </>
    );
}
export default memo(Profile);