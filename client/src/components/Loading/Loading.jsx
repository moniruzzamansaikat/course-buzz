import React from 'react';
import './Loading.css';

function Loading({ fontSize = '1rem', ...props }) {
  return (
    <i className="fa fa-spinner loader" style={{ fontSize }} {...props}></i>
  );
}

export default Loading;
