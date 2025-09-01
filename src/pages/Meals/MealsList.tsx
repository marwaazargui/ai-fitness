import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ModernTable from "./../../components/TableView/Table"; // Corrected component name import
import type { Column } from "./../../components/TableView/Table";
import { Trash2, UserRoundPen } from "lucide-react";

type Meal = {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

const rows: Meal[] = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const columns: Column<Meal>[] = [
  // Corrected properties to match the new `Column` interface
  { title: "Dessert (100g serving)", dataIndex: "name" },
  { title: "Calories", dataIndex: "calories", align: "right" },
  { title: "Fat (g)", dataIndex: "fat", align: "right" },
  { title: "Carbs (g)", dataIndex: "carbs", align: "right" },
  { title: "Protein (g)", dataIndex: "protein", align: "right" },
  {
    title: "Actions",
    dataIndex: "name", // Using a unique key from the data
    align: "center",
    render: (_value, row) => (
      <>
        <IconButton
          aria-label="edit"
          size="small"
          sx={{
            mr: 1,
            background: "#f3f4f6",
            borderRadius: 2,
            "&:hover": { background: "#e0e7ef", color: "#4338ca" },
            transition: "all 0.15s",
          }}
        >
          <UserRoundPen fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          sx={{
            color: "#ef4444",
            background: "#f3f4f6",
            borderRadius: 2,
            "&:hover": { background: "#fee2e2", color: "#b91c1c" },
            transition: "all 0.15s",
          }}
        >
          <Trash2 fontSize="small" />
        </IconButton>
      </>
    ),
  },
];

export default function MealsPage() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        mb={4}
        gap={2}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Meals Overview
          </Typography>
          <Typography variant="body1" color="text-muted">
            Here’s a breakdown of popular desserts with their calories and macros per 100g serving.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: 44,
            px: 3,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "12px",
            textTransform: "none",
            background: "linear-gradient(90deg, #fb923c, #ec4899)",
            boxShadow: "0 4px 16px rgba(236,72,153,0.10)",
            "&:hover": {
              background: "linear-gradient(90deg, #f97316, #db2777)",
            },
          }}
        >
          Add Meal
        </Button>
      </Box>

      {/* Modern Table */}
      <ModernTable columns={columns} data={rows} />
    </Box>
  );
}