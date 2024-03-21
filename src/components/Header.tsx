import { Dispatch, useMemo } from "react"
import { ActivityAction, ActivityState } from "../reducers/activity.reducer"

type Props = {
  state: ActivityState,
  dispatch: Dispatch<ActivityAction>
}

const Header = ({state, dispatch}: Props) => {

  const canRestartApp = useMemo(() => state.activites.length > 0, [state.activites])

  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl px-5 md:px-0 mx-auto flex justify-between items-center">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de Calorías
        </h1>
        <button
          onClick={() => dispatch({ type: 'restart-app' })}
          className="bg-gray-800 hover:bg-gray-900 p-2 font-bold text-white cursor-pointer rounded-md text-sm disabled:opacity-50"
          disabled={!canRestartApp}
        >Reiniciar App
        </button>
      </div>
    </header>
  )
}

export default Header