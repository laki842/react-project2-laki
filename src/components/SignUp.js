import React from 'react';
import './SignUp.css';
import ReactDom from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { useGloballyUserContext } from './FormContext';

function SignUp({ openSignUp, closeSignUp }) {
  const { handleForm, handleChange, signUpData, errors } =
    useGloballyUserContext();

  // if showSignUp is false show nothing
  if (!openSignUp) return null;

  // more advanced version of modal is portal
  return ReactDom.createPortal(
    <>
      <div className='signup-wrapper'>
        <div className='signup'>
          <div onClick={closeSignUp} className='close-btn'>
            <GrClose className='close-icon' />
          </div>
          <h1>Sign Up</h1>
          <form action='' className='signup-form' onSubmit={handleForm}>
            <div className='signup-username'>
              <input
                id='username'
                type='text'
                name='username'
                className='signup-input'
                placeholder='Enter your Username'
                onChange={handleChange}
                value={signUpData.username}
              />
              {/* if error is true show p */}
              {errors.username && <p>Username is required.</p>}
            </div>
            <div className='signup-email'>
              <input
                id='email'
                type='email'
                name='email'
                className='signup-input'
                placeholder='Enter your Email'
                onChange={handleChange}
                value={signUpData.email}
              />
              {errors.email && <p>Email is required.</p>}
            </div>
            <div className='signup-password'>
              <input
                id='password'
                type='password'
                name='password'
                className='signup-input'
                placeholder='Enter your Password'
                onChange={handleChange}
                value={signUpData.password}
              />
              {errors.password && <p>Password is required.</p>}
              {errors.shortPassword && (
                <p>Password needs to be at least 8 characters long.</p>
              )}
            </div>
            <div className='signup-confirm-password'>
              <input
                id='confirmpassword'
                type='password'
                name='confirmpassword'
                className='signup-input'
                placeholder='Confirm your Password'
                onChange={handleChange}
                value={signUpData.confirmpassword}
              />
              {errors.confirmPassword && <p>Passwords do not match.</p>}
            </div>
            <div className='btn-container'>
              <button type='submit' className='signup-submit-btn'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('portal-signup')
  );
}

export default SignUp;
