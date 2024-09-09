import React from "react";

function Button({ text, className }) {
  return (
    <a href="#" className={className}>
      {text}
    </a>
  );
}

export default Button;
