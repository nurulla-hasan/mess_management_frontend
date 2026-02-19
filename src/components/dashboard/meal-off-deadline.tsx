import { AlertCircle } from "lucide-react"

export function MealOffDeadline() {
  return (
    <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex gap-3 mt-4">
      <AlertCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-sm text-green-900">Meal Off Deadline</h4>
        <p className="text-xs text-green-700 mt-1 leading-relaxed">
          Remember to off your meals before 10:00 PM for the next day's breakfast.
        </p>
      </div>
    </div>
  )
}
