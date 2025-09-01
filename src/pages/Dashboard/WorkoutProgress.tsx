import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const workoutData = [
  { date: "2025-08-01", minutes: 40 },
  { date: "2025-08-02", minutes: 50 },
  { date: "2025-08-03", minutes: 35 },
  { date: "2025-08-04", minutes: 45 },
  { date: "2025-08-05", minutes: 50 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-emerald-500 font-medium">
          Minutes: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function WorkoutProgress() {
  return (
    <div className="p-6  from-white via-emerald-50 to-blue-50 border border-gray-100 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
        Workout Progress
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={workoutData}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 14, fill: "#0ea5e9" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            label={{
              value: "Minutes",
              angle: -90,
              position: "insideLeft",
              fill: "#64748b",
              fontSize: 14,
            }}
            tick={{ fontSize: 14, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f0fdfa", opacity: 0.5 }} />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: 12 }}
            formatter={() => (
              <span className="font-medium text-emerald-500">Minutes</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#10b981"
            strokeWidth={4}
            dot={{ r: 6, fill: "#fff", stroke: "#10b981", strokeWidth: 3 }}
            activeDot={{ r: 8, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}