import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "30px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} py-2`} role="alert">
          {props.alert.message}
        </div>
      )}
    </div>
  );
}
