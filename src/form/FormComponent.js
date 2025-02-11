
import React, { useState } from "react";
import "./FormComponent.css";
import NamePassword from "./NamePassword";
import CheckboxRadio from "./CheckBoxRadio";
import FormFooter from "./FormFooter";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    checkbox: [],
    radio: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        checkbox: checked
          ? [...prev.checkbox, value]
          : prev.checkbox.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.checkbox.length === 0) newErrors.checkbox = "Select at least one option";
    if (!formData.radio) newErrors.radio = "Select a radio option";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <NamePassword formData={formData} handleChange={handleChange} errors={errors} />
      <CheckboxRadio formData={formData} handleChange={handleChange} errors={errors} />
      <FormFooter />
    </form>
  );
};

export default FormComponent;