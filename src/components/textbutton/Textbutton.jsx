import React from "react";
import "./Textbutton.css";
export default function Textbutton({ text, click }) {
  return (
    <div onClick={click} className="forgot">
      {text}
    </div>
  );

}
