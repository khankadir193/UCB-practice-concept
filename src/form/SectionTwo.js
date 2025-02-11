import React from "react";

const SectionTwo = ({ sectionTwo, setSectionTwo, errors }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedBorrowers = sectionTwo.borrower_details.map((borrower, i) =>
      i === index ? { ...borrower, [name]: value } : borrower
    );
    setSectionTwo((prev) => ({ ...prev, borrower_details: updatedBorrowers }));
  };

  return (
    <div>
      <h2>Section Two - Borrower Details</h2>
      {sectionTwo.borrower_details.map((borrower, index) => (
        <div key={borrower.id} className="borrower-details">
          <label>
            Borrower Name:
            <input
              type="text"
              name="borrower_name"
              value={borrower.borrower_name}
              onChange={(e) => handleChange(e, index)}
            />
            {errors[`borrower_name_${index}`] && (
              <span className="error">{errors[`borrower_name_${index}`]}</span>
            )}
          </label>

          <label>
            Port Number:
            <input
              type="text"
              name="port_number"
              value={borrower.port_number}
              onChange={(e) => handleChange(e, index)}
            />
            {errors[`port_number_${index}`] && (
              <span className="error">{errors[`port_number_${index}`]}</span>
            )}
          </label>

          <label>
            NAICS Code:
            <input
              type="text"
              name="naics_code"
              value={borrower.naics_code}
              onChange={(e) => handleChange(e, index)}
            />
            {errors[`naics_code_${index}`] && (
              <span className="error">{errors[`naics_code_${index}`]}</span>
            )}
          </label>

          <label>
            Business Description:
            <input
              type="text"
              name="business_description"
              value={borrower.business_description}
              onChange={(e) => handleChange(e, index)}
            />
            {errors[`business_description_${index}`] && (
              <span className="error">{errors[`business_description_${index}`]}</span>
            )}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
