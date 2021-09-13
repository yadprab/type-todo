import { createContext, Dispatch, SetStateAction } from "react";
import { IState } from "./interface";

interface IContext {
  ctx: {
    GlobalState: IState["states"];
    setGlobalState: Dispatch<SetStateAction<IState["states"]>>;
  };
}

export const dataContext = createContext<IContext["ctx"] | null>(null);
