import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
