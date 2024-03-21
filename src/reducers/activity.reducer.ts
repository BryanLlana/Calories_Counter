import { ActivityWithId } from "../types"

export type ActivityState = {
  activites: ActivityWithId[],
  activeId: ActivityWithId['id']
}

export type ActivityAction = 
  { type: 'save-activity', payload: { newActivity: ActivityWithId }} |
  { type: 'set-activeId', payload: {id: ActivityWithId['id']} } |
  { type: 'delete-activity', payload: {id: ActivityWithId['id']} } |
  { type: 'restart-app' }

const localStorageActivities = (): ActivityWithId[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState =  {
  activites: localStorageActivities(),
  activeId: ''
} 

export const activityReducer = (state: ActivityState, action: ActivityAction): ActivityState => {
  if (action.type === 'save-activity') {
    if (state.activeId) {
      const updateActivities = state.activites.map(activity => {
        if (activity.id === state.activeId) {
          return {
            ...action.payload.newActivity
          }
        }
        return activity
      })
      return {
        ...state,
        activites: updateActivities,
        activeId: ''
      }
    } else {
      return {
        ...state,
        activites: [...state.activites, action.payload.newActivity]
      }
    }
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activites: state.activites.filter(activity => activity.id !== action.payload.id)
    }
  }

  if (action.type === 'restart-app') {
    return {
      activites: [],
      activeId: ''
    }
  }
  return state
}