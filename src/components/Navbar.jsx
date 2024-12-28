import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">Event Management</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/create-event" className="mx-2">Create Event</Link>
      </div>
    </nav>
  );
};

export default Navbar;
