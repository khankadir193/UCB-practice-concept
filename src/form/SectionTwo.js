const SectionTwo = ({ sectionTwo, setSectionTwo, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSectionTwo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Section Two</h2>
      <label>
        Relationship Name:
        <input
          type="text"
          name="relationship_name"
          value={sectionTwo.relationship_name}
          onChange={handleChange}
        />
        {errors.relationship_name && <span className="error">{errors.relationship_name}</span>}
      </label>
      <label>
        Bank:
        <input
          type="text"
          name="bank"
          value={sectionTwo.bank}
          onChange={handleChange}
        />
        {errors.bank && <span className="error">{errors.bank}</span>}
      </label>
      <label>
        Report Date:
        <input
          type="date"
          name="report_date"
          value={sectionTwo.report_date}
          onChange={handleChange}
        />
        {errors.report_date && <span className="error">{errors.report_date}</span>}
      </label>
    </div>
  );
};

export default SectionTwo;