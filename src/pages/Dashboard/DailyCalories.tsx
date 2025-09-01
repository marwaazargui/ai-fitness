import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Modern color palette
const calorieData = [
  { day: "Mon", calories: 1200, goal: 1400 },
  { day: "Tue", calories: 1500, goal: 1400 },
  { day: "Wed", calories: 1300, goal: 1400 },
  { day: "Thu", calories: 1600, goal: 1400 },
  { day: "Fri", calories: 1400, goal: 1400 },
  { day: "Sat", calories: 1500, goal: 1400 },
  { day: "Sun", calories: 1350, goal: 1400 },
];

const COLORS = {
  calories: "#ec4899", // pink-500
  goal: "#6366f1",     // indigo-500
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-pink-500 font-medium">
          Calories: <span className="font-bold">{payload[0].value}</span>
        </p>
        <p className="text-indigo-500 font-medium">
          Goal: <span className="font-bold">{payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function CalorieIntakeChart() {
  return (
    <div className="p-6  from-white via-indigo-50 to-pink-50 border border-gray-100 rounded-2xl shadow-lg w-full h-96">
      <h2 className="text-xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
        Daily Calorie Intake vs Goal
      </h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={calorieData}
          barGap={8}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="day" tick={{ fontSize: 14, fill: "#6366f1" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 14, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f3f4f6", opacity: 0.5 }} />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: 12 }}
            formatter={(value) =>
              <span className={`font-medium ${value === "calories" ? "text-pink-500" : "text-indigo-500"}`}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            }
          />
          <Bar
            dataKey="calories"
            fill={COLORS.calories}
            radius={[8, 8, 0, 0]}
            maxBarSize={32}
          />
          <Bar
            dataKey="goal"
            fill={COLORS.goal}
            radius={[8, 8, 0, 0]}
            maxBarSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}