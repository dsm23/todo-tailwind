import React, {
  ChangeEventHandler,
  KeyboardEvent,
  FunctionComponent,
  useState,
  EventHandler,
  ChangeEvent,
} from 'react';
import clsx from 'clsx';

interface Props {
  onSave: (arg0: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

const TodoTextInput: FunctionComponent<Props> = props => {
  const [text, setText] = useState<string>(props.text || '');

  const handleSubmit: EventHandler<
    ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>
  > = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        setText('');
      }
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setText(event.target.value);
  };

  const handleBlur: ChangeEventHandler<HTMLInputElement> = event => {
    if (!props.newTodo) {
      props.onSave(event.target.value);
    }
  };

  return (
    <input
      className={clsx({
        edit: props.editing,
        'new-todo': props.newTodo,
      })}
      type="text"
      placeholder={props.placeholder}
      autoFocus={process.env.NODE_ENV === 'production'}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
