import { ActionTypes, TodoFilters } from "../constants";

export interface TodoType {
  text: string;
  completed: boolean;
  id: number;
}

export interface TodoActionType {
  type: ActionTypes;
  id?: number;
  text?: string;
}

export interface FilterActionType {
  type: ActionTypes;
  filter: TodoFilters;
}

export type AddTodoFn = (text: string) => TodoActionType;
export type DeleteTodoFn = (id: number) => TodoActionType;
export type EditTodoFn = (id: number, text: string) => TodoActionType;
export type CompleteTodoFn = (id: number) => TodoActionType;
export type CompleteAllTodosFn = () => TodoActionType;
export type ClearCompletedFn = () => TodoActionType;
export type SetVisibilityFilterFn = (filter: TodoFilters) => FilterActionType;
