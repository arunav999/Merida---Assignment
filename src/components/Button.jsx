import React from "react";

function Button({ children, ...props }) {
  return (
    <>
      <button className="reButton" {...props}>
        {children}
      </button>
    </>
  );
}

export default Button;
