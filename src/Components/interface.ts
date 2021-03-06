export interface IState {
  states: {
    startTasks: boolean;
    addTask: boolean;
    theme: string;
    themeState: boolean;
    filterTask: boolean;
    All: boolean;
    Completed: boolean;
    NotCompleted: boolean;
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

// export interface IState3 {
//   states3: {
//     All: boolean;
//     Completed: boolean;
//     NotCompleted: boolean;
//   };
// }
