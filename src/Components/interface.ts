export interface IState {
  states: {
    startTasks: boolean;
    addTask: boolean;
    theme: string;
    themeState: boolean;
    filterTask: boolean;
  };
}
export interface IReducer {
  redState: {
    todo: string;
    id: string;
    isCompleted: boolean;
    isOpen: boolean;
    isDelete: boolean;
    isTrying: boolean;
  }[];
}

export interface IState2 {
  states2: {
    value: string;
    error: boolean;
  };
}
