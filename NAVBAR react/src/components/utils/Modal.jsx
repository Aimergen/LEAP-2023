
import Modal from 'react-bootstrap/Modal';
import Title from '../Content/Title';
import Button from 'react-bootstrap/Button';

export default function DynamicModal({show, handleClose, title,content}){
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {content}
    </Modal.Body>
  </Modal>
    );
}