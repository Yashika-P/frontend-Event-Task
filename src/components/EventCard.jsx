import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="font-bold text-xl">{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <Link to={`/events/${event._id}`} className="text-blue-500 mt-2 block">View Details</Link>
    </div>
  );
};

export default EventCard;
