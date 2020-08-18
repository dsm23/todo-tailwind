/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import tw, { styled } from 'twin.macro';

import 'twin.macro';

import FilterLink from '../containers/FilterLink';
import { TodoFilters } from '../constants/TodoFilters';
import { ClearCompletedFn } from '../types';

interface Props {
  completedCount: number;
  activeCount: number;
  onClearCompleted: ClearCompletedFn;
}

const FILTER_TITLES = {
  [TodoFilters.ShowAll]: 'All',
  [TodoFilters.ShowActive]: 'Active',
  [TodoFilters.ShowCompleted]: 'Completed',
};

const StyledFooter = styled.footer([
  tw`inline-flex justify-between h-10 text-center py-3 px-4 w-full`,
  {
    ':before': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      height: 50,
      overflow: 'hidden',
      zIndex: -1,
      boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2),
                  0 8px 0 -3px #f6f6f6,
                  0 9px 1px -3px rgba(0, 0, 0, 0.2),
                  0 16px 0 -6px #f6f6f6,
                  0 17px 2px -6px rgba(0, 0, 0, 0.2)`,
    },
  },
]);

const Footer: FunctionComponent<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
}) => {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <StyledFooter>
      <div tw="w-1/3 text-left">
        <span tw="font-semibold">{activeCount || 'No'}</span> {itemWord} left
      </div>
      <div tw="inline-flex justify-center w-1/3">
        {Object.values(TodoFilters).map((filter: TodoFilters) => (
          <FilterLink key={filter} filter={filter}>
            {FILTER_TITLES[filter]}
          </FilterLink>
        ))}
      </div>

      <div tw="w-1/3 text-right">
        {Boolean(completedCount) && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </StyledFooter>
  );
};

export default Footer;
