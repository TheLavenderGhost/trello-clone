import React, {
  createContext,
  useReducer,
  useContext,
} from 'react';
import { nanoid } from 'nanoid';
import { overrideItemAtIndex } from '../utils/arrayUtils';

// todo refactor

type Task = {
  id: string,
  text: string,
};

type List = {
  id: string,
  text: string,
  tasks: Task[],
};

export type AppState = {
  lists: List[],
};

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [
        {
          id: 'c0',
          text: 'Generrate app scaffold',
        },
      ],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [
        {
          id: 'c2',
          text: 'Learn Typescript',
        },
      ],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [
        {
          id: 'c3',
          text: 'Begin to use static typing',
        },
      ],
    },
  ],
};

type AppStateContextProps = {
  state: AppState,
  dispatch: React.Dispatch<Action>,
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [ state, dispatch ] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

type Action = {
  type: 'addList',
  payload: string,
} | {
  type: 'addTask',
  payload: {
    text: string,
    listId: string,
  }
};

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type){
    case 'addList': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case 'addTask': {
      const targetListIndex = state.lists.findIndex(item => item.id === action.payload.listId);

      const targetList = state.lists[targetListIndex];

      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          {
            id: nanoid(),
            text: action.payload.text,
          },
        ],
      };

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedTargetList,
          targetListIndex
        ),
      };
    }
    default: {
      return state;
    }
  }
};
