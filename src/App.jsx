import logo from "./logo.svg";
import styles from "./App.module.css";
import Timer from "./components/Timer";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <section className="flex justify-between">
          <div>
            <p class="text-3xl pb-10 font-bold text-blue-500">
              hello my friend <br /> it's learning solidjs
            </p>
            <img src={logo} class={styles.logo} alt="logo" />
          </div>
          <components>
            <Timer />
            <SimpleTodo />
          </components>
        </section>
      </header>
    </div>
  );
}

export default App;
