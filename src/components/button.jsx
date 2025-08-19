import React, { useState } from "react";


function Button({ text, bgColor = "#007bff", fgColor = "#fff" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? "var(--secondary-color)" : bgColor,
        color: fgColor,
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease", // smooth hover animation
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default Button;
