import logo from "./logo.svg";
import styles from "./App.module.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>hello my friend</p>
          <div>
            <Timer />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
