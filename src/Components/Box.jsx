import React from "react";

function Box({ number, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100px",
        height: "100px",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "antiquewhite",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Box #{number}
    </div>
  );
}

export default Box;
