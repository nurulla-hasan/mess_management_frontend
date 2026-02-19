import { AlertCircle } from "lucide-react"

export function MealOffDeadline() {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3 mt-4">
      <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-sm text-primary">Meal Off Deadline</h4>
        <p className="text-xs text-primary/80 mt-1 leading-relaxed">
          Remember to off your meals before 10:00 PM for the next day's breakfast.
        </p>
      </div>
    </div>
  )
}
