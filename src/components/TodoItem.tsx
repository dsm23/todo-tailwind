import React, { FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import TodoTextInput from './TodoTextInput';
import { CompleteTodoFn, DeleteTodoFn, EditTodoFn, TodoType } from '../types';

interface Props {
  todo: TodoType;
  editTodo: EditTodoFn;
  deleteTodo: DeleteTodoFn;
  completeTodo: CompleteTodoFn;
}

const TodoItem: FunctionComponent<Props> = ({
  todo,
  completeTodo,
  deleteTodo,
  editTodo,
}) => {
  const [editing, setEditing] = useState<boolean>(false);

  const handleDoubleClick = () => setEditing(true);

  // TODO: change types
  const handleSave = (id: any, text: any) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setEditing(false);
  };

  const element = editing ? (
    <TodoTextInput
      text={todo.text}
      editing={editing}
      onSave={text => handleSave(todo.id, text)}
    />
  ) : (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />
      <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id)} />
    </div>
  );

  return (
    <li
      className={clsx({
        completed: todo.completed,
        editing,
      })}
    >
      {element}
    </li>
  );
};

export default TodoItem;
