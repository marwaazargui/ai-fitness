import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const workoutData = [
  { date: "2025-08-01", minutes: 40 },
  { date: "2025-08-02", minutes: 50 },
  { date: "2025-08-03", minutes: 35 },
  { date: "2025-08-04", minutes: 45 },
  { date: "2025-08-05", minutes: 50 },
];

export default function WorkoutProgress() {
  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Workout Progress</h2>
      <LineChart width={400} height={250} data={workoutData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="minutes" stroke="#10b981" strokeWidth={3} />
      </LineChart>
    </div>
  );
}
