import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const weightData = [
  { date: "2025-08-01", weight: 66.8, goal: 65 },
  { date: "2025-08-08", weight: 66.2, goal: 65 },
  { date: "2025-08-15", weight: 65.9, goal: 65 },
  { date: "2025-08-22", weight: 65.5, goal: 65 },
];

export default function WeightTracking() {
  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Weight / Goal Tracking</h2>
      <LineChart width={400} height={250} data={weightData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Weight (kg)", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#f43f5e" strokeWidth={3} />
        <Line type="monotone" dataKey="goal" stroke="#3b82f6" strokeDasharray="5 5" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
