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

const weightData = [
  { date: "2025-08-01", weight: 66.8, goal: 65 },
  { date: "2025-08-08", weight: 66.2, goal: 65 },
  { date: "2025-08-15", weight: 65.9, goal: 65 },
  { date: "2025-08-22", weight: 65.5, goal: 65 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-sky-500 font-medium">
          Weight: <span className="font-bold">{payload[0].value} kg</span>
        </p>
        <p className="text-pink-500 font-medium">
          Goal: <span className="font-bold">{payload[1].value} kg</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function WeightTracking() {
  return (
    <div className="p-6 from-white via-sky-50 to-pink-50 border border-gray-100 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-2"></span>
        Weight / Goal Tracking
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={weightData}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 14, fill: "#0ea5e9" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            label={{
              value: "Weight (kg)",
              angle: -90,
              position: "insideLeft",
              fill: "#64748b",
              fontSize: 14,
            }}
            tick={{ fontSize: 14, fill: "#64748b" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f0f9ff", opacity: 0.5 }} />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: 12 }}
            formatter={(value) =>
              <span className={`font-medium ${value === "weight" ? "text-sky-500" : "text-pink-500"}`}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            }
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#0ea5e9"
            strokeWidth={4}
            dot={{ r: 6, fill: "#fff", stroke: "#0ea5e9", strokeWidth: 3 }}
            activeDot={{ r: 8, fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="goal"
            stroke="#f43f5e"
            strokeDasharray="5 5"
            strokeWidth={3}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}