import React, { useState } from "react";
import { Pagination, PaginationItem, TablePagination } from "@mui/material";

export const PaginationComponent22 = ({
    totalPages,
    page,
    setPage,
    totalEntries,
    rowsPerPage,
    handleChangeRowsPerPage,
}) => {
    return (
        <div className="main-pagination">
            {/* Number Pagination */}
            <div className="number-pagination">
                <Pagination
                    count={totalPages}
                    page={page + 1}
                    defaultPage={1}
                    onChange={(_, newPage) => setPage(newPage - 1)}
                    siblingCount={1}
                    boundaryCount={totalPages <= 3 ? totalPages : 1}
                    hideNextButton={totalPages <= 1}
                    hidePrevButton={totalPages <= 1}
                    renderItem={(item) => <PaginationItem {...item} />}
                />
            </div>

            {/* Rows Per Page Pagination */}
            <div className="count-pagination">
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20]}
                    component="div"
                    count={totalEntries}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => handleChangeRowsPerPage(event.target.value)}
                    sx={{ fontSize: "0.725vw" }}
                />
            </div>
        </div>
    );
};