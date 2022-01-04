import React from 'react';
import './Modal.css';
import Spaceship from '../images/Spaceship.jpeg';

function Modal() {
  return (
    <div className='modal-container'>
      <img className='modal-img' src={Spaceship} alt='spaceship' />
      <p>
        We are a team of experienced astronauts that enjoys the interstellar
        travel. Experience the laid-back cruising through sectors rich with
        neutron stars, black holes and red giants. Leave your problems 1527
        light years behind, by <span>SIGNING UP TODAY</span>.
      </p>
    </div>
  );
}

export default Modal;
