import { Button } from "@mui/material";
import React from "react";
import GenerateReportTable from "./PdfTable";

const GeneratePdf = () => {
  const handleGeneratePDF = () => {
    // Generate PDF logic
    console.log("Generate PDF");
  };

  const handlePrint = () => {
    // Print logic
    console.log("Print");
  };

  return (
    <>
      <GenerateReportTable />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          padding: "20px 0",
          borderTop: "1px solid #f0f4f8",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGeneratePDF}
        >
          Generate PDF
        </Button>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print
        </Button>
      </div>
    </>
  );
};

export default GeneratePdf;
