import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time")
  const iRunOnlyOnce = () => { console.log("i run only once") }
  useEffect(iRunOnlyOnce, [])
  return (
    <div>
      <h1 className={styles.title}>Welcome back! {counter}</h1>
      <Button text="Click me" onClick={onClick} />
    </div>
  );
}

export default App;
