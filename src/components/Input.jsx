import React from "react";

function Input({ children, textarea, id, ...props }) {
  return (
    <>
      <label htmlFor={id} className="input-container__label">
        {children}
      </label>
      {!textarea ? (
        <input id={id} {...props} className="input-container__input" />
      ) : (
        <textarea
          id={id}
          {...props}
          className="input-container__textarea"
        ></textarea>
      )}
    </>
  );
}

export default Input;
