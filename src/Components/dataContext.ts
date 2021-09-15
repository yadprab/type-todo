import { createContext, Dispatch, SetStateAction } from "react";
import { IState } from "./interface";
import { IReducer } from "./interface";

export type ACTIONTYPES =
  | { type: "Submit"; payload: string }
  | { type: "Toggle"; payload: string }
  | { type: "Finished"; payload: string }
  | { type: "Delete"; payload: string };


interface IContext {
  ctx: {
    GlobalState: IState["states"];
    setGlobalState: Dispatch<SetStateAction<IState["states"]>>;
    state: IReducer["redState"];
    dispatch: React.Dispatch<ACTIONTYPES>;
  };
}

export const dataContext = createContext<IContext["ctx"] | null>(null);
