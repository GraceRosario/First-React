import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card username="jane" />
      <Card username="james" />
    </>
  );
}

export default App;
