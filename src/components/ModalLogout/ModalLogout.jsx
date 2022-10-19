import React, { useState } from 'react';
import Modal from './Modal';

const ModalLogout = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show} title="Exit the App?" />
    </div>
  );
};

export default ModalLogout;
