import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AppTodo from "./components/appTodo";


function App() {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AppTodo />
      <Todos />
    </>
  );
}

export default App;
