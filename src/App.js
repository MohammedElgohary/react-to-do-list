import { useReducer, useState } from "react";

import { Col, Row, Container } from "reactstrap";
import { Header, GeneralActions, TodosInput, TodoList } from "./components";
import { actions } from "./controllers/actions";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);

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
  }, []);

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
    console.log({ edit, obj });

    setText("");
    setEdit(null);

    return obj;
  };

  return (
    <>
      <Header />
      <div className="mx-5 mx-sm-3 mx-xs-3">
        <Row>
          <Col lg="4">
            <TodosInput
              {...{ dispatch, text, setText, edit, actions, addEditTodo }}
            />
          </Col>
          <Col lg="8">
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
