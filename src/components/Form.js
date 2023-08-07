import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fw-bold"
          >
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
        <button className="btn btn-primary ms-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleClearClick}>
          Reset
        </button>
      </div>
      <div className="container">
        <label
          htmlFor="exampleFormControlTextarea2"
          className="form-label fw-bold"
        >
          Text Summary
        </label>
        <p>
          {text.trim().split(" ").length} words & {text.length} characters{" "}
        </p>
      </div>
    </>
  );
}
