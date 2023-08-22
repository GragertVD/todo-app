
export type Theme =  "light" | "dark"

export enum MainActionTypes {
  SET_THEME = "SET_THEME",
}

export interface MainAction {
  type: MainActionTypes.SET_THEME;
  payload: Theme;
}

export interface MainState {
  theme: Theme;
}