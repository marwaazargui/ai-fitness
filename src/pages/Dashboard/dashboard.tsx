import CalorieIntakeChart from "./DailyCalories";
import MacroBreakdown from "./MacroBreakdown";
import WorkoutProgress from "./WorkoutProgress";
import WeightTracking from "./GoalTracking";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 gap-6">
      {/* Full-width row */}
      <CalorieIntakeChart />

      {/* Split row: two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MacroBreakdown />
        <WorkoutProgress />
      </div>

      {/* Full-width row */}
      <WeightTracking />
    </div>
  );
}
