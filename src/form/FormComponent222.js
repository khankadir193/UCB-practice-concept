import React, { useState } from "react";
import SectionTwo from "./SectionTwo";
import ScheduleOfAccounts from "./ScheduleOfAccount";
import CollateralTable from "./CollateralTable";
import {
  SCHEDULE_OF_ACCOUNTS_FORM_FIELDS,
  COLLATERAL_TABLE_FORM_FIELDS,
  SECTION_TWO_FORM_FIELDS,
} from "./formField";
import FormFooter from "./FormFooter";

const FormComponent222 = () => {
  const [sectionTwo, setSectionTwo] = useState(SECTION_TWO_FORM_FIELDS);
  const [scheduleOfAccounts, setScheduleOfAccounts] = useState(
    SCHEDULE_OF_ACCOUNTS_FORM_FIELDS
  );
  const [collateralTable, setCollateralTable] = useState(
    COLLATERAL_TABLE_FORM_FIELDS
  );
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // SectionTwo Validation
    if (!sectionTwo.relationship_name)
      newErrors.relationship_name = "Relationship name is required";
    if (!sectionTwo.bank) newErrors.bank = "Bank name is required";
    if (!sectionTwo.report_date)
      newErrors.report_date = "Report date is required";

    // ScheduleOfAccounts Validation
    scheduleOfAccounts.forEach((account, index) => {
      if (!account.borrower_name)
        newErrors[`borrower_name_${index}`] = "Borrower name is required";
      if (!account.loan_number)
        newErrors[`loan_number_${index}`] = "Loan number is required";
    });

    // CollateralTable Validation
    if (!collateralTable.comments_on_collateral_value)
      newErrors.comments_on_collateral_value = "Comments are required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    console.log('getting error..')
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <SectionTwo sectionTwo={sectionTwo} setSectionTwo={setSectionTwo} errors={errors} />
      <ScheduleOfAccounts
        scheduleOfAccounts={scheduleOfAccounts}
        setScheduleOfAccounts={setScheduleOfAccounts}
        errors={errors}
      />
      <CollateralTable
        collateralTable={collateralTable}
        setCollateralTable={setCollateralTable}
        errors={errors}
      />
      <FormFooter handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormComponent222;
