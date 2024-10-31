import React, { useState } from 'react';
import axios from 'axios';
import './DeleteUserAdmin.css'; // Optional: Add custom CSS for styling

const DeleteUserAdmin = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:5000/api/admin/delete-user/${email}`); // Use email in the route

      if (response.status === 200) {
        setMessage(response.data.message); // Set the success message returned from the server
        setError(''); // Clear any previous errors
        setEmail('');  // Clear email field after successful deletion
      }
    } catch (err) {
      console.error('Error deleting user/admin:', err);
      if (err.response && err.response.status === 404) {
        setError('User/Admin not found');
        setMessage(''); // Clear previous success message
      } else {
        setError('Failed to delete user/admin. Please try again.');
        setMessage(''); // Clear previous success message
      }
    }
  };

  return (
    <div className="delete-user-admin-container">
      <h2>Delete User/Admin by Email</h2>
      
      <form onSubmit={handleDelete}>
        <input
          type="email"
          name="email"
          placeholder="Enter email to delete"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="delete-button">Delete</button>
      </form>

      {/* Display success or error messages */}
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default DeleteUserAdmin;
