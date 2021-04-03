import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newnum, oldnum] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{newnum}</h2>
      <h2>{oldnum}</h2>
      <button onClick={() => oldnum(newnum + 1)}>click</button>
      <h2>{oldnum}</h2>
    </div>
  );
}
