export default function WeeklyPlan() {
  return (
    <section>
      <div>This is the weekly meal plan page</div>

      <div>
        <input
          type="text"
          name="meal"
          placeholder="Monday: Chicken Tacos"
        ></input>
        <button type="submit">Add to meal plan</button>
      </div>
    </section>
  )
}
