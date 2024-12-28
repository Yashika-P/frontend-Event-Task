import React, { useState } from 'react';
import axios from '../api/axios';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/events', {
        title,
        description,
      });

      // You can use the 'response' variable here to handle the success
      if (response.data) {
        console.log('Event created successfully:', response.data);
        // Show success message or redirect user
      }
    } catch (err) {
      setError('There was an error creating the event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Event</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
