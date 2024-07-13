import React from 'react';
import { Modal } from 'react-bootstrap'; // Assuming you're using Bootstrap for modals


const SellFormModal = ({ setShowSellFormModal }) => {
  const handleClose = () => {
    setShowSellFormModal(false);
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Start Selling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
    </Modal>
  );
}

export default SellFormModal;
