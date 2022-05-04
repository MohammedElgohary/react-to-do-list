import React from "react";
import { Button } from "reactstrap";

function GeneralActions({ todos, dispatch, actions }) {
  return todos.length > 1 ? (
    <div className="px-3 mb-5">
      <Button
        color="success"
        size="sm"
        onClick={() => dispatch({ type: actions.COMPLETE_ALL })}
        className="m-1 rounded-pill"
      >
        Complete All
      </Button>
      <Button
        color="primary"
        size="sm"
        onClick={() => dispatch({ type: actions.RESTORE_ALL })}
        className="m-1 rounded-pill"
      >
        Restore All
      </Button>
      <Button
        color="danger"
        size="sm"
        onClick={() => dispatch({ type: actions.DELETE_ALL })}
        className="m-1 rounded-pill"
      >
        Delete All
      </Button>
    </div>
  ) : null;
}

export { GeneralActions };
