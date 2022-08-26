import React from 'react';

const Dificulty = ({ text, id, change, checked}) =>{ 

  return( <>
    <input type="checkbox" id={id} onChange={change} checked={(checked) ? "checked" : ""}/>
    <label for={id}>{text}</label>
    <br />
  </>
)}

export default Dificulty;
