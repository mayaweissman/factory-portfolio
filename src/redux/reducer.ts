import { AppState } from "./appState";
import { Action } from "./action";
import { ActionType } from "./actionType";
import { act } from "react-dom/test-utils";
import { UserModel } from "../models/userModel";

export function reducer(oldAppState: AppState, action: Action): AppState {
  const newAppState = { ...oldAppState }; //Duplicate the old state into a new state

  switch (action.type) {
    case ActionType.getAllItems:
      newAppState.allItems = action.payLoad;
      break;

    default:
      break;
  }

  return newAppState;
}
