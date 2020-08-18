import { ActionTypes } from "../constants/ActionTypes";
import { TodoActionType, TodoType } from "../types";

const initialState: TodoType[] = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  }
];

export default function todos(
  state: TodoType[] = initialState,
  action: TodoActionType
) {
  switch (action.type) {
    case ActionTypes.AddTodo:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case ActionTypes.DeleteTodo:
      return state.filter(todo => todo.id !== action.id);

    case ActionTypes.EditTodo:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case ActionTypes.CompleteTodo:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case ActionTypes.CompleteAllTodos:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case ActionTypes.ClearCompleted:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
