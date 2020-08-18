import { FilterActionType } from '../types';
import { ActionTypes, TodoFilters } from '../constants';

const visibilityFilter = (
  state: TodoFilters = TodoFilters.ShowAll,
  action: FilterActionType,
) => {
  switch (action.type) {
    case ActionTypes.SetVisibilityFilter:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
