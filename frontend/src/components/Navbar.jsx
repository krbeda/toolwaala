import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Toolwaala</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/tools" className="text-gray-700 hover:text-blue-600">Tools</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
