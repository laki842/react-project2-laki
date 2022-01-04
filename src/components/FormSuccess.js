import React from 'react';
import ReactDom from 'react-dom';
import Tick from '../images/Tick.png';
import './FormSuccess.css';

function FormSuccess() {
  return ReactDom.createPortal(
    <div className='success-wrapper'>
      <div className='success-container'>
        <img src={Tick} alt='well done' className='success-img' />
      </div>
    </div>,
    document.getElementById('portal-signup')
  );
}

export default FormSuccess;
