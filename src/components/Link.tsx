import React, { FunctionComponent } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  active: Boolean;
  // TODO: change type
  setFilter: Function;
}

const StyledButton = styled.button<Pick<Props, 'active'>>([
  tw`px-2`,
  ({ active }) =>
    active
      ? tw`bg-purple-900 text-white font-semibold focus:border focus:border-teal-900`
      : null,
]);

const Link: FunctionComponent<Props> = ({ active, children, setFilter }) => (
  <StyledButton active={active} onClick={() => setFilter()}>
    {children}
  </StyledButton>
);

export default Link;
