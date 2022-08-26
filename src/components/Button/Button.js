import React from 'react';


const Button = ({text, func }) => (
  <div>
    <button className="btn btn-primary me-2" onClick={func}>{text}</button>
  </div>
);

export default Button;
