import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss'; // Import your CSS file

export default function Loader() {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
