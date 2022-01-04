import React, { useState } from 'react';
import './HeroSection.css';
import Modal from './Modal';

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  // functionality for modal button
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='hero-section'>
        <h1>Why join us?</h1>
        <div className='modal-btn-container' onClick={handleModal}>
          <button className='modal-btn'>
            {showModal ? 'Hide text' : 'Discover more'}
          </button>
        </div>
        <div className='hero-section-modal'>{showModal ? <Modal /> : null}</div>
      </div>
    </>
  );
}

export default HeroSection;
