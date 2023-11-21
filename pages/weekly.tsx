import { Header } from "@/components/header/header"
import "../src/globals.css"

export default function WeeklyPlan() {
  return (
    <main className="bg-slate-500 h-screen">
      <Header />
      <div className="h-full flex justify-center items-center flex-col">
        <div>This is the weekly meal plan page</div>
        <div>
          <input
            type="text"
            name="meal"
            placeholder="Monday: Chicken Tacos"
          ></input>
          <button type="submit">Add to meal plan</button>
        </div>
      </div>
    </main>
  )
}
