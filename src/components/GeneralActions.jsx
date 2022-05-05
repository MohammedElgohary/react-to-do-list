import React from "react";
import { Button } from "reactstrap";
import { MdDeleteOutline } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { confirm } from "../controllers";

function GeneralActions({ todos, dispatch, actions }) {
  return todos.length > 1 ? (
    <div className="my-3">
      <Button
        color="success"
        size="sm"
        onClick={() =>
          confirm({
            text: "Are you sure of completing all tasks ?",
            callback: () => dispatch({ type: actions.COMPLETE_ALL }),
          })
        }
        className="m-1"
      >
        <TiTick size={21} className="mr-1" />
        Complete All
      </Button>

      <Button
        color="info"
        size="sm"
        onClick={() =>
          confirm({
            text: "Are you sure of restoring all tasks ?",
            callback: () => dispatch({ type: actions.RESTORE_ALL }),
          })
        }
        className="m-1"
      >
        <FiRefreshCcw size={21} className="mr-1" />
        Restore All
      </Button>
      <Button
        color="danger"
        size="sm"
        onClick={() =>
          confirm({
            text: "Are you sure of deleting all tasks ?",
            callback: () => dispatch({ type: actions.DELETE_ALL }),
          })
        }
        className="m-1"
      >
        <MdDeleteOutline size={21} className="mr-1" />
        Delete All
      </Button>
    </div>
  ) : null;
}

export { GeneralActions };
