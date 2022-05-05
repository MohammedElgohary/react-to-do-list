import React, { useState, useLayoutEffect } from "react";
import { Header, Body, Loader } from "./components";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [todos, setTodos] = useState([]);

  useLayoutEffect(() => {
    if (window) {
      const lastTodos = window.localStorage.getItem("todos");
      if (lastTodos) {
        setTodos(JSON.parse(lastTodos));
      }
    }

    //  just waiting a second  to show the loader
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      {loaded ? <Body initalTodos={todos} /> : <Loader />}
    </>
  );
}

export default App;
