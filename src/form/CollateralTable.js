import React from "react";

const CollateralTable = ({ collateralTable, setCollateralTable, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollateralTable((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Collateral Table</h2>
      <label>
        Comments on Collateral Value:
        <textarea
          name="comments_on_collateral_value"
          value={collateralTable.comments_on_collateral_value}
          onChange={handleChange}
        />
        {errors.comments_on_collateral_value && <span className="error">{errors.comments_on_collateral_value}</span>}
      </label>
    </div>
  );
};

export default CollateralTable;