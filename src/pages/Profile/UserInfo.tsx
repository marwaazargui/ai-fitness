import { useState } from "react";
import Select from "react-select";

export default function UserInfo() {
  const [gender, setGender] = useState<{ label: string; value: string } | null>(null);
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState<number | null>(null);

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCalories(null);

    // Simulate API call
    try {
      // Replace this with your real API call
      const response = await fetch("/api/calculate-calories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age,
          weight,
          height,
          gender: gender?.value,
        }),
      });
      const data = await response.json();
      setCalories(data.calories); // assuming API returns { calories: number }
    } catch (err) {
      setCalories(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-14">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Calories Details</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Age */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Age"
          />
        </div>
        {/* Weight */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Weight in kg"
          />
        </div>
        {/* Height */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Height in cm"
          />
        </div>
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Gender</label>
          <Select
            value={gender}
            onChange={setGender}
            options={genderOptions}
            placeholder="Select Gender"
            isClearable
            classNames={{
              control: () => "rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 transition",
            }}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.75rem",
                borderColor: "#d1d5db",
                minHeight: "44px",
                boxShadow: "none",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#9ca3af",
              }),
            }}
          />
        </div>
        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-7 py-2.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg font-semibold hover:from-orange-500 hover:to-pink-600 transition flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? "Calculating..." : "Save Details"}
          </button>
        </div>
      </form>
      {/* Show Calories Result */}
      {calories !== null && (
        <div className="mt-8 bg-pink-50 border border-pink-200 rounded-xl p-6 text-center">
          <span className="block text-lg font-semibold text-pink-600 mb-2">
            Your Daily Calorie Intake:
          </span>
          <span className="text-3xl font-bold text-gray-900">{calories} kcal</span>
        </div>
      )}
    </div>
  );
}