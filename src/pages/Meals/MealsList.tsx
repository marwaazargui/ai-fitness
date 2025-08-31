import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CustomTable from "./../../components/TableView/Table";
import type { Column } from "./../../components/TableView/Table";
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
  { header: "Dessert (100g serving)", accessor: "name" },
  { header: "Calories", accessor: "calories", align: "right" },
  { header: "Fat (g)", accessor: "fat", align: "right" },
  { header: "Carbs (g)", accessor: "carbs", align: "right" },
  { header: "Protein (g)", accessor: "protein", align: "right" },
];

export default function MealsPage() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Meals Overview
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here’s a breakdown of popular desserts with their calories and
            macros per 100g serving.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: 40,
            px: 3,
            fontSize: "0.9rem",
            fontWeight: 600,
            background: "linear-gradient(90deg, #fb923c, #ec4899)",
            "&:hover": {
              background: "linear-gradient(90deg, #f97316, #db2777)",
            },
          }}
        >
          Add Meal
        </Button>
      </Box>

      {/* Table */}
      <CustomTable columns={columns} data={rows} />
    </Box>
  );
}
