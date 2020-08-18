import { ActionTypes } from '../constants';
import {
  AddTodoFn,
  DeleteTodoFn,
  EditTodoFn,
  CompleteTodoFn,
  CompleteAllTodosFn,
  ClearCompletedFn,
  SetVisibilityFilterFn,
} from '../types';

export const addTodo: AddTodoFn = text => ({
  type: ActionTypes.AddTodo,
  text,
});
export const deleteTodo: DeleteTodoFn = id => ({
  type: ActionTypes.DeleteTodo,
  id,
});
export const editTodo: EditTodoFn = (id, text) => ({
  type: ActionTypes.EditTodo,
  id,
  text,
});
export const completeTodo: CompleteTodoFn = id => ({
  type: ActionTypes.CompleteTodo,
  id,
});
export const completeAllTodos: CompleteAllTodosFn = () => ({
  type: ActionTypes.CompleteAllTodos,
});
export const clearCompleted: ClearCompletedFn = () => ({
  type: ActionTypes.ClearCompleted,
});
export const setVisibilityFilter: SetVisibilityFilterFn = filter => ({
  type: ActionTypes.SetVisibilityFilter,
  filter,
});
