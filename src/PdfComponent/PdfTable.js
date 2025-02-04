import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useRef } from "react";



const GenerateReportTable = React.forwardRef((props, ref) => (
  <Box ref={ref} className="h-[400px] w-full bg-background">
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      checkboxSelection={false}
      hideFooterPagination
      disableRowSelectionOnClick
      sx={{
        "& .MuiDataGrid-root": { border: "none" },
        "& .MuiDataGrid-cell": { borderColor: "rgb(243, 244, 246)" },
        "& .MuiDataGrid-columnHeaders": { backgroundColor: "rgb(243, 244, 246)", borderBottom: "none" },
        "& .MuiDataGrid-row:nth-of-type(odd)": { backgroundColor: "rgb(249, 250, 251)" },
      }}
    />
  </Box>
));

export default GenerateReportTable;


