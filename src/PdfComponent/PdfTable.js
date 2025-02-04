import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";

const columns = [
  {
    field: "mainPortNumber",
    headerName: "Main Port #",
    width: 130,
  },
  {
    field: "borrowerName",
    headerName: "Borrower Name",
    width: 250,
  },
  {
    field: "location",
    headerName: "Location",
    width: 130,
  },
  {
    field: "preparedDate",
    headerName: "Prepared Date",
    width: 130,
  },
  {
    field: "originalLoanOfficer",
    headerName: "Original Loan Officer",
    width: 180,
  },
  {
    field: "currentLoanOfficer",
    headerName: "Current Loan Officer",
    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
          case "completed":
            return "text-green-500";
          case "assigned":
            return "text-orange-500";
          case "submitted":
            return "text-purple-500";
          default:
            return "";
        }
      };

      return (
        <span className={getStatusColor(params.value)}>{params.value}</span>
      );
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

export default function GenerateReportTable() {
  return (
    <Box className="h-[400px] w-full bg-background">
      <DataGrid
        id="report-table"
        rows={rows}
        columns={columns}
        checkboxSelection={false}
        hideFooter={true}
        hideFooterPagination={true}
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderColor: "rgb(243, 244, 246)",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgb(243, 244, 246)",
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            padding: "12px 16px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600",
          },
          "& .MuiDataGrid-row": {
            "&:nth-of-type(odd)": {
              backgroundColor: "rgb(249, 250, 251)",
            },
          },
        }}
      />
    </Box>
  );
}
