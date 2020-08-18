import React, { FunctionComponent } from 'react';
import TodoTextInput from './TodoTextInput';
import { AddTodoFn } from '../types';

interface Props {
  addTodo: AddTodoFn;
}

const Header: FunctionComponent<Props> = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text: string) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
