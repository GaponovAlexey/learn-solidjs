import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0)
  
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>hello my friend</p>
        {count}
      </header>
    </div>
  );
}

export default App;
