import React, { useState } from 'react';
import './Navbar.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ScriptModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRadioClick = (id) => {
    // Handle radio click logic here
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create a New Script</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="script-options">
            <div
              className="script-option"
              onClick={() => handleRadioClick('featureFilm')}
            >
              <input
                type="radio"
                name="scriptType"
                id="featureFilm"
                className="form-check-input"
              />
              <label htmlFor="featureFilm">
                <b>Feature Film</b>
                <br />
                Begin crafting your feature film screenplay with the assistance
                of Co-Pilot's power.
              </label>
            </div>
            <div
              className="script-option"
              onClick={() => handleRadioClick('videoShorts')}
            >
              <input
                type="radio"
                name="scriptType"
                id="videoShorts"
                className="form-check-input"
              />
              <label htmlFor="videoShorts">
                <b>Video Shorts</b>
                <br />
                Take your video shorts to new heights by utilizing AI to craft
                your scripts in screenplay format.
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Nent
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScriptModal;
