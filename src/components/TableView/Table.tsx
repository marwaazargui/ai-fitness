import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "rc-table"; // rc-table import
import "./ModernTable.css"; // <-- Add this line

// The new column type for rc-table
export interface Column<T> {
  title: string;
  dataIndex: keyof T;
  align?: "left" | "right" | "center";
  render?: (value: any, row: T, index: number) => React.ReactNode;
}

interface ModernTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function ModernTable<T extends { [key: string]: any }>({
  columns,
  data,
}: ModernTableProps<T>) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Box>
        <Paper
          sx={{
            borderRadius: 6,
            boxShadow: "0 6px 32px 0 rgba(30,41,59,0.10)",
            background: "linear-gradient(90deg, #f8fafc 70%, #f1f5f9 100%)",
            border: "1px solid #e5e7eb",
            padding: { xs: 2, md: 4 },
            minWidth: { xs: "300px", md: "600px" },
          }}
        >
          <Table
            columns={columns as any}
            data={data}
            emptyText="No data found."
            rowKey={(record, index) => record.name || index} // Ensure unique keys
            className="rc-table" // <--- Important: Add this
            rowClassName={(record, index) =>
              index % 2 === 0 ? "even-row" : "odd-row"
            } // <--- Important: Add this
          />
        </Paper>
      </Box>
    </Box>
  );
}