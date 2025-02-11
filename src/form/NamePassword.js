import React from "react";

const NamePassword = ({ formData, handleChange, errors }) => {
  return (
    <>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <br />
    </>
  );
};

export default NamePassword;