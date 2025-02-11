import React from "react";

const CheckboxRadio = ({ formData, handleChange, errors }) => {
  return (
    <>
      <label>
        <input type="checkbox" name="checkbox" value="India" onChange={handleChange} /> India
      </label>
      <br />
      <label>
        <input type="checkbox" name="checkbox" value="USA" onChange={handleChange} /> USA
      </label>
      <br />
      <label>
        <input type="checkbox" name="checkbox" value="UK" onChange={handleChange} /> UK
      </label>
      {errors.checkbox && <span className="error">{errors.checkbox}</span>}
      <br />
      <label>
        <input type="radio" name="radio" value="Option1" onChange={handleChange} /> Option 1
      </label>
      <br />
      <label>
        <input type="radio" name="radio" value="Option2" onChange={handleChange} /> Option 2
      </label>
      {errors.radio && <span className="error">{errors.radio}</span>}
      <br />
    </>
  );
};

export default CheckboxRadio;