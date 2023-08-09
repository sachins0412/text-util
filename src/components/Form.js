import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Converted to Uppercase");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Converted to Lowercase");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("success", "Test cleared");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <div
          className={`mb-3 text-${props.mode === "dark" ? "light" : "dark"}`}
        >
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
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <label
          htmlFor="exampleFormControlTextarea2"
          className="form-label fw-bold"
        >
          Text Summary
        </label>
        <p>
          {text === "" ? 0 : text.trim().split(/\s+/).length} words &{" "}
          {text.length} characters{" "}
        </p>
      </div>
    </>
  );
}
