import { Button } from "@mui/material";
import React from "react";
import GenerateReportTable from "./PdfTable";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePdf = () => {
  const handleGeneratePDF = () => {
    // Generate PDF logic
    const doc = new jsPDF();
    doc.autoPdfTable({html : '#report-table'});
    // const tableColumn = ["ID", "Name", "Age", "Country"];
    // const tableRows = [
    //   [1, "Abdul Kadir Khan", 25, "USA"],
    //   [2, "Abdul Jabir Khan", 24, "UK"],
    //   [3, "Abdul Hameed Khan", 48, "Canada"],
    // ];
    // doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("report.pdf");
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
