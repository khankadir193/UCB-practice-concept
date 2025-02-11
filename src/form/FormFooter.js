import React from "react";

const FormFooter = ({handleSubmit}) => {
  return (
    <button type="submit" className="submit-btn" onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default FormFooter;
