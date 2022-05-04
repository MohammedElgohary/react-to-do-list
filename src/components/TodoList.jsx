import React from "react";
import { Todo, NoItemsFound } from "./index";
function TodoList({ todos, dispatch, actions, setEdit, setText }) {
  return (
    <div className="mt-5 p-5 card border-0">
      <h3>Task List</h3>

      {todos?.length ? (
        todos.map((todo, index) => (
          <Todo
            key={index}
            {...{ todo, dispatch, actions, setEdit, setText }}
          />
        ))
      ) : (
        <NoItemsFound />
      )}
    </div>
  );
}

export { TodoList };
