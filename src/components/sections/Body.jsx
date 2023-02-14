import React, { useReducer, useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import { GeneralActions, TodosInput, TodoList, Footer } from "../index";

import { actions, MySwal } from "../../controllers";

function Body({ initalTodos }) {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const [edit, setEdit] = useState(null);

  initalTodos = initalTodos ? initalTodos : [];

  const [todos, dispatch] = useReducer((state, { type, data }) => {
    switch (type) {
      case actions.ADD_TODO:
        return [data, ...state];

      case actions.EDIT_TODO:
        return state.map((ele) => (ele.id === data.id ? data : ele));

      case actions.DELETE_TODO:
        if (edit && edit.id === data) {
          setEdit(null);
        }
        let arr = [...state];
        arr.splice(
          arr.findIndex((ele) => ele.id === data),
          1
        );
        return arr;

      case actions.COMPLETE_TODO:
        return state.map((ele) =>
          ele.id === data ? { ...ele, completed: true } : ele
        );

      case actions.RESTORE_TODO:
        return state.map((ele) =>
          ele.id === data ? { ...ele, completed: false } : ele
        );

      case actions.RESTORE_ALL:
        return state.map((ele) => ({ ...ele, completed: false }));

      case actions.COMPLETE_ALL:
        return state.map((ele) => ({ ...ele, completed: true }));

      case actions.DELETE_ALL:
        return [];

      default:
        return state;
    }
  }, initalTodos);

  const addEditTodo = () => {
    let obj = edit
      ? {
          ...edit,
          text,
        }
      : {
          id: new Date().toJSON(),
          text,
          date: new Date().toJSON(),
          completed: false,
        };

    if (edit) {
      MySwal({ timer: 800, text: "Edit successfully !" });
    }

    setText("");
    setEdit(null);

    return obj;
  };

  useEffect(() => {
    if (window) window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mx-5 mx-sm-2 mx-xs-1 app-body">
      <Row>
        <Col lg="4">
          <TodosInput
            {...{ dispatch, text, setText, edit, actions, addEditTodo }}
          />
        </Col>
        <Col lg="8" className="list-body">
          <TodoList
            {...{
              todos,
              dispatch,
              actions,
              setEdit,
              setText,
              search,
              setSearch,
            }}
          />
          <GeneralActions {...{ todos, dispatch, actions }} />

          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export { Body };
