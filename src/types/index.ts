export type Category = {
  id: number,
  name: string
}

export type ActivityForm = {
  category: number,
  name: string,
  calories: number
}

export type ActivityWithId = ActivityForm & {
  id: string
}