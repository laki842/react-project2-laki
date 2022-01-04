import React, { useState } from 'react';
import './Navbar.css';
import SignUp from './SignUp';
import { useGloballyUserContext } from './FormContext';
import FormSuccess from './FormSuccess';

function Navbar() {
  const { success } = useGloballyUserContext();
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <div className='nav'>
        <div className='nav-left'>
          <h1>Join Us</h1>
        </div>
        <div className='nav-right'>
          <div className='nav-signup'>
            <div className='navbar-btn' onClick={() => setShowSignUp(true)}>
              Signup
            </div>
          </div>
        </div>
      </div>
      {/* display either tick or form */}
      {success ? (
        <FormSuccess />
      ) : (
        <SignUp
          openSignUp={showSignUp}
          closeSignUp={() => setShowSignUp(false)}
        />
      )}
    </>
  );
}

export default Navbar;
