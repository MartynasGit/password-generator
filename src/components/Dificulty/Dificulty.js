import React from 'react';
import { useState } from "react";

const Dificulty = ({ text, id, change, checked}) =>{ 
  
  return( <>
    <input type="checkbox" id={id} onChange={change} defaultChecked={(checked) ? "checked" : ""}/>
    <label for={id}>{text}</label>
    <br />
  </>
)}

export default Dificulty;
