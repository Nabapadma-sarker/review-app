import React from "react";

const InputGroup = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        //   className={error.name ? "is-invalid" : ""}
      />
      {/* <sub className={error.name ? "invalid-feedback" : "is-valid"}>
        {error.name}
      </sub> */}
    </div>
  );
};

export default InputGroup;
