import React from "react";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";
import { CompleteAllTodosFn, ClearCompletedFn } from "../types";

interface Actions {
  completeAllTodos: CompleteAllTodosFn;
  clearCompleted: ClearCompletedFn;
}

interface Props {
  todosCount: number;
  completedCount: number;
  actions: Actions;
}

const MainSection = ({ todosCount, completedCount, actions }: Props) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
        />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
);

export default MainSection;
