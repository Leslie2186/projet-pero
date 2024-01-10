import React from "react";

function inputForm({ label, onChange, type, value, name, placeholder }) {
  return (
    <label>
      <span className="labelContactForm">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default inputForm;
