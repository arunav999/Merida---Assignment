import React from "react";

function Input({ children, textarea, id, ...props }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      {!textarea ? (
        <input id={id} {...props} />
      ) : (
        <textarea id={id} {...props}></textarea>
      )}
    </>
  );
}

export default Input;
