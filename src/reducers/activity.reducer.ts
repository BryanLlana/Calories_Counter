import { ActivityWithId } from "../types"

type ActivityState = {
  activites: ActivityWithId[]
}

export type ActivityAction = {
  type: 'save-activity',
  payload: { newActivity: ActivityWithId }
}

export const initialState: ActivityState =  {
  activites: []
} 

export const activityReducer = (state: ActivityState, action: ActivityAction): ActivityState => {
  if (action.type === 'save-activity') {
    return {
      ...state,
      activites: [...state.activites, action.payload.newActivity]
    }
  }
  return state
}