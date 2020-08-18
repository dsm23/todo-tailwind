import { createSelector } from "reselect";
import { TodoFilters } from "../constants/TodoFilters";

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case TodoFilters.ShowAll:
        return todos;
      case TodoFilters.ShowCompleted:
        return todos.filter(t => t.completed);
      case TodoFilters.ShowActive:
        return todos.filter(t => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);
