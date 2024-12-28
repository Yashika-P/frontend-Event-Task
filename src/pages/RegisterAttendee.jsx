import React, { useState } from 'react';
import axios from '../api/axios';

const RegisterAttendee = ({ eventId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/events/${eventId}/register`, formData);
      setSuccessMessage(response.data.message || 'Registration successful!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'An error occurred during registration.'
      );
      setSuccessMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
      {successMessage && (
        <div className="mb-4 p-2 text-green-800 bg-green-200 rounded">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="mb-4 p-2 text-red-800 bg-red-200 rounded">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterAttendee;
