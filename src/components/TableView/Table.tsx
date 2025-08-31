import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  align?: "left" | "right" | "center";
  render?: (value: any, row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function CustomTable<T extends { [key: string]: any }>({
  columns,
  data,
}: CustomTableProps<T>) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
          <Table aria-label="custom table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f3e8ff" }}>
                {columns.map((col) => (
                  <TableCell key={col.header} align={col.align || "left"}>
                    <b>{col.header}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    sx={{ py: 3, color: "text.secondary" }}
                  >
                    No data found.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, idx) => (
                  <TableRow
                    key={idx}
                    hover
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns.map((col) => (
                      <TableCell key={col.header} align={col.align || "left"}>
                        {col.render
                          ? col.render(row[col.accessor], row)
                          : row[col.accessor]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
