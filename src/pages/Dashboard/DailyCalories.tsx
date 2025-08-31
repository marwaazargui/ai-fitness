import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const calorieData = [
  { day: "Mon", calories: 1200, goal: 1400 },
  { day: "Tue", calories: 1500, goal: 1400 },
  { day: "Wed", calories: 1300, goal: 1400 },
  { day: "Thu", calories: 1600, goal: 1400 },
  { day: "Fri", calories: 1400, goal: 1400 },
  { day: "Sat", calories: 1500, goal: 1400 },
  { day: "Sun", calories: 1350, goal: 1400 },
];

export default function CalorieIntakeChart() {
  return (
    <div className="p-4 border rounded-xl shadow w-full h-80">
      <h2 className="text-lg font-semibold mb-8">Daily Calorie Intake vs Goal</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={calorieData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#29abe2" />
          <Bar dataKey="goal" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
