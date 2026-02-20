"use client";

import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameMonth,
  isToday,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Mock data for meals
const MEAL_DATA: Record<string, { lunch: number; dinner: number }> = {
  "2023-10-01": { lunch: 1.0, dinner: 1.0 },
  "2023-10-02": { lunch: 1.0, dinner: 0.5 },
  "2023-10-03": { lunch: 0.0, dinner: 1.0 },
  "2023-10-04": { lunch: 1.0, dinner: 1.0 },
  "2023-10-05": { lunch: 2.0, dinner: 1.0 }, // Guest meal
  "2023-10-09": { lunch: 1.0, dinner: 1.0 }, // Today in mock
  "2023-10-24": { lunch: 1.0, dinner: 1.0 },
};

export function MealCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const firstDay = startOfMonth(currentMonth);
  const lastDay = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  const startDayOfWeek = getDay(firstDay); // 0 = Sunday

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const goToToday = () => setCurrentMonth(new Date());

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">
            {format(currentMonth, "MMMM yyyy")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            View and manage daily meal logs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        {/* Legend */}
        <div className="flex gap-4 px-6 pb-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"></div>
            <span>Lunch</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800"></div>
            <span>Dinner</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 border-t border-l">
          {/* Weekday Headers */}
          {weekDays.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-semibold text-muted-foreground border-b border-r bg-muted/30"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for start of month */}
          {Array.from({ length: startDayOfWeek }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="min-h-25 border-b border-r bg-muted/5"
            />
          ))}

          {/* Days */}
          {days.map((day) => {
            const dateKey = format(day, "yyyy-MM-dd");
            const data = MEAL_DATA[dateKey];
            const isTodayDate = isToday(day);

            return (
              <div
                key={day.toString()}
                className={cn(
                  "min-h-25 p-2 border-b border-r relative group transition-colors hover:bg-muted/50",
                  !isSameMonth(day, currentMonth) && "text-muted-foreground bg-muted/10",
                  isTodayDate && "ring-1 ring-inset ring-green-500 bg-green-50/10"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={cn(
                      "text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full",
                      isTodayDate
                        ? "bg-green-500 text-white"
                        : "text-foreground"
                    )}
                  >
                    {format(day, "d")}
                  </span>
                  {isTodayDate && (
                    <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-tighter">
                      Today
                    </span>
                  )}
                </div>

                {/* Meal Data */}
                <div className="flex flex-col gap-1">
                  {data ? (
                    <>
                      {data.lunch > 0 && (
                        <div className="flex justify-between text-xs px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          <span className="font-semibold">L</span>
                          <span>{data.lunch}</span>
                        </div>
                      )}
                      {data.dinner > 0 && (
                        <div className="flex justify-between text-xs px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                          <span className="font-semibold">D</span>
                          <span>{data.dinner}</span>
                        </div>
                      )}
                    </>
                  ) : (
                    // Placeholder for hover effect or empty state
                    <div className="h-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-xs text-muted-foreground border border-dashed rounded px-2 py-1">Add entry</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
           {/* Empty cells to fill the last row */}
           {Array.from({ length: (7 - (getDay(lastDay) + 1)) % 7 }).map((_, i) => (
             <div key={`empty-end-${i}`} className="min-h-25 border-b border-r bg-muted/5" />
           ))}
        </div>
      </CardContent>
    </Card>
  );
}
