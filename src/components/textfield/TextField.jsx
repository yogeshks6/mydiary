import React from "react";
import "./textfield.css";
export default function TextField({ label ,place,id}) {
  return (
    <div className="section">
      <label htmlFor={id} className="label">
        {label}
      </label>

      <input
      placeholder={place}
        type="email"
        id={id}
        name={id}
        size={"55"}
        className="text"
      />
    </div>
  );
}
