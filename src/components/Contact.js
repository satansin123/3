import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailContent: '',
  });

  function openModal() {
    document.getElementById("emailModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("emailModal").style.display = "none";
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Additional logic for handling the form data or submission if needed
    console.log('Form data submitted:', formData);

    // You can also manually trigger the form submission if needed
    document.getElementById('emailForm').submit();

    // Close the modal or perform any other actions after submission
    closeModal();
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  


  return (
    <div className="contact bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-gray-600">
            Cancellations accepted up to 24 hours before the scheduled service. Within 24 hours of the service, cancellations will be charged 50% of the scheduled cost.
          </p>
          <button className="whatsapp-button py-2 px-4 bg-yellow-600 text-white font-bold rounded-full inline-flex items-center justify-center" onClick={openModal}>
            Contact Us on Email
          </button>
        </div>

        <div id="emailModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal()}>&times;</span>
            <form id="emailForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" required onChange={handleChange} /><br />
      <label htmlFor="email">Email:</label><br />
      <input id="email" type="email" placeholder="Email-ID" name="email" required onChange={handleChange} /><br />
      <label htmlFor="emailContent">Email Content:</label><br />
      <textarea id="emailContent" name="emailContent" required onChange={handleChange}></textarea><br />
      <input type="submit" value="Submit" />
    </form>
          </div>
        </div>

        <div className="mb-4">
          <p className="footer-text mb-4 text-gray-600">Hours</p>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Open today 09:00 am - 05:00 pm</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Contact;
