import { MainAction, MainActionTypes, MainState, Theme} from "../../types/main"

const initState: MainState = {
  theme: "light"
}

export const mainReducer = (state: MainState = initState, action: MainAction): MainState => {

  switch (action.type) {
    case MainActionTypes.SET_THEME:
      return {...state, theme: action.payload}

    default:
      return state;
  }
}

export const setThemAction = (payload: Theme) => ({ type: MainActionTypes.SET_THEME, payload });

