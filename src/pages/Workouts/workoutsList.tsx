import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CustomTable, { type Column } from "./../../components/TableView/Table";

type Workout = {
  name: string;
  type: string;
  duration: number; // in minutes
  caloriesBurned: number;
};

const rows: Workout[] = [
  { name: "Running", type: "Cardio", duration: 30, caloriesBurned: 300 },
  { name: "Bench Press", type: "Strength", duration: 20, caloriesBurned: 180 },
  { name: "Cycling", type: "Cardio", duration: 40, caloriesBurned: 400 },
  { name: "Squats", type: "Strength", duration: 25, caloriesBurned: 220 },
  { name: "Yoga", type: "Flexibility", duration: 60, caloriesBurned: 200 },
];

const columns: Column<Workout>[] = [
  { header: "Workout Name", accessor: "name" },
  { header: "Type", accessor: "type" },
  { header: "Duration (min)", accessor: "duration", align: "right" },
  { header: "Calories Burned", accessor: "caloriesBurned", align: "right" },
];

export default function WorkoutsPage() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Workouts Overview
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your exercises, duration, and calories burned.
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
          Add WorkOut
        </Button>
      </Box>

      {/* Table */}
      <CustomTable columns={columns} data={rows} />
    </Box>
  );
}
