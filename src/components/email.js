// EmailModal.js
import React from 'react';

const EmailModal = ({ isVisible, closeModal }) => {
  return (
    <div id="emailModal" className={`modal ${isVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form id="emailForm" action="https://formsubmit.co/d223b3f1af5402deaf12edf81c9189df" method="POST">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="email">Email:</label><br />
          <input id="email" type="email" placeholder="Email-ID" name="email" required /><br />
          <label htmlFor="emailContent">Email Content:</label><br />
          <textarea id="emailContent" name="emailContent" required></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
