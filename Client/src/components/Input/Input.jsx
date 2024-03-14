import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  name,
  isRequired = false,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={isRequired}
      onChange={onChange}
    />
  );
};

export default Input;
