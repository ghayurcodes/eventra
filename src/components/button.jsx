import React, { useState } from "react";


function Button({ text, bgColor , fgColor = "#fff" ,onhov="var(--secondary-color)" ,onclick}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? onhov : bgColor,
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
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Button;
