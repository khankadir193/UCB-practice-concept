import React from "react";

const ScheduleOfAccounts = ({ scheduleOfAccounts, setScheduleOfAccounts, errors }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAccounts = [...scheduleOfAccounts];
    updatedAccounts[index][name] = value;
    setScheduleOfAccounts(updatedAccounts);
  };

  return (
    <div>
      <h2>Schedule Of Accounts</h2>
      {scheduleOfAccounts.map((account, index) => (
        <div key={index}>
          <label>
            Borrower Name:
            <input
              type="text"
              name="borrower_name"
              value={account.borrower_name}
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`borrower_name_${index}`] && <span className="error">{errors[`borrower_name_${index}`]}</span>}
          </label>
          <label>
            Loan Number:
            <input
              type="text"
              name="loan_number"
              value={account.loan_number}
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`loan_number_${index}`] && <span className="error">{errors[`loan_number_${index}`]}</span>}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ScheduleOfAccounts;