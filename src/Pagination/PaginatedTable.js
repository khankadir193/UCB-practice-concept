import { useState } from "react";
import { PaginationComponent22 } from "./PaginationComponent22 ";
import './newStyle.css';


export const PaginatedTable = () => {
    const [rows, setRows] = useState([
        {
            mainPort: "8943289472",
            carDate: "22/08/24",
            mainPortBorrower: "Fugetron",
            location: "Alabama",
            data: [
                { port: "09839927298", portBorrower: "Fugetron" },
                { port: "09839927299", portBorrower: "UCB" },
            ],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        {
            mainPort: "8943289473",
            location: "Athens",
            carDate: "30/08/24",
            mainPortBorrower: "UCB",
            data: [],
        },
        // Duplicates removed for brevity
    ]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangeRowsPerPage = (newRowsPerPage) => {
        setRowsPerPage(parseInt(newRowsPerPage, 10));
        setPage(0);
    };

    const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Main Port</th>
                        <th>Location</th>
                        <th>Car Date</th>
                        <th>Borrower</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedRows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.mainPort}</td>
                            <td>{row.location}</td>
                            <td>{row.carDate}</td>
                            <td>{row.mainPortBorrower}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Component */}
            <PaginationComponent22
                totalPages={Math.ceil(rows.length / rowsPerPage)}
                page={page}
                setPage={setPage}
                totalEntries={rows.length}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    );
};

export default PaginatedTable;
