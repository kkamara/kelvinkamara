import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function LoginModal() {
  const [modalIsOpen] = React.useState(true);

  function afterOpenModal() {
  }

  function closeModal() {
  }

  function submitForm(e) {
    e.preventDefault()
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
      >
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="test">Test</label>
            <input 
              name='test'
              type="text" 
              placeholder='Test' 
              className="form-control" 
            />
          </div>
          <br />
          <button 
            className='btn btn-danger' 
            onClick={closeModal}
          >
            Close
          </button>
          <input 
            type='submit' 
            className='btn btn-primary' 
            onClick={submitForm}
            value='Submit'
          />
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal