import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activity.reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activites))
  }, [state.activites])

  return (
    <>
      <Header state={state} dispatch={dispatch}/>

      <section className="bg-lime-500 py-20 px-5 md:px-0">
        <div className="max-w-4xl mx-auto">
          <Form state={state} dispatch={dispatch} />
        </div>
      </section>

      <section className="bg-gray-800 py-10 px-5 md:px-0">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activites}/>
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl px-5 md:px-0">
        <ActivityList activities={state.activites} dispatch={dispatch} />
      </section>
    </>
  )
}

export default App
