import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useRef } from "react";
import GenerateReportTable from "./PdfTable";


const columns = [
  { field: "mainPortNumber", headerName: "Main Port #", width: 130 },
  { field: "borrowerName", headerName: "Borrower Name", width: 250 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "preparedDate", headerName: "Prepared Date", width: 130 },
  { field: "originalLoanOfficer", headerName: "Original Loan Officer", width: 180 },
  { field: "currentLoanOfficer", headerName: "Current Loan Officer", width: 180 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      const statusColors = {
        completed: "text-green-500",
        assigned: "text-orange-500",
        submitted: "text-purple-500",
      };
      return <span className={statusColors[params.value.toLowerCase()] || ""}>{params.value}</span>;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: () => <Checkbox />,
  },
];

const rows = [
  {
    id: "6402353",
    mainPortNumber: "6402353",
    borrowerName: "SWANN AVENUE PROPERTIES LLC",
    location: "400 North",
    preparedDate: "08/27/2024",
    originalLoanOfficer: "Dennis Enriquez",
    currentLoanOfficer: "Dennis Enriquez",
    status: "COMPLETED",
  },
  {
    id: "6402354",
    mainPortNumber: "6402354",
    borrowerName: "SWANN AVENUE PROPERTIES LLC",
    location: "400 North",
    preparedDate: "08/27/2024",
    originalLoanOfficer: "James Ottley",
    currentLoanOfficer: "James Ottley",
    status: "ASSIGNED",
  },
  {
    id: "6402355",
    mainPortNumber: "6402355",
    borrowerName: "SWANN AVENUE PROPERTIES LLC",
    location: "400 North",
    preparedDate: "08/27/2024",
    originalLoanOfficer: "Dennis Enriquez",
    currentLoanOfficer: "Dennis Enriquez",
    status: "SUBMITTED",
  },
  {
    id: "6402356",
    mainPortNumber: "6402356",
    borrowerName: "SWANN AVENUE PROPERTIES LLC",
    location: "400 North",
    preparedDate: "08/27/2024",
    originalLoanOfficer: "James Ottley",
    currentLoanOfficer: "James Ottley",
    status: "SUBMITTED",
  },
];
const GeneratePdf = () => {
  const tableRef = useRef(null);

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    const tableColumn = columns.map((col) => col.headerName);
    const tableRows = rows.map((row) => columns.map((col) => row[col.field] || ""));
    
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save("report.pdf");
  };

  return (
    <>
      <GenerateReportTable ref={tableRef} columns={columns} rows={rows} />
      <div className="mt-5 flex justify-center gap-5 w-full p-5 border-t">
        <Button variant="contained" color="secondary" onClick={handleGeneratePDF}>
          Generate PDF
        </Button>
      </div>
    </>
  );
};

export default GeneratePdf;
