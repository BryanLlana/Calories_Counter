import { useMemo } from "react"
import { ActivityWithId } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type Props = {
  activities: ActivityWithId[]
}

const CalorieTracker = ({ activities }: Props) => {
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total , 0), [activities])
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total , 0), [activities])
  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

  return (
    <>
      <h2 className="text-4xl font-bold text-white text-center">Resumen de Calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" textcolor="text-blue-800" />
        <CalorieDisplay calories={netCalories} text="Diferencia" textcolor={netCalories < 0 ? 'text-yellow-500' : 'text-red-500'} />
        <CalorieDisplay calories={caloriesBurned} text="Ejercicio" textcolor="text-orange-500"/>    
      </div>
    </>
  )
}

export default CalorieTracker