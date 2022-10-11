import logo from "./logo.svg";
import styles from "./App.module.css";
import Timer from "./components/Timer";
import SimpleTodo from "./components/SimpleTodo";
import SimpleRouter from "./components/SimpleRouter";
import CountPage from "./components/CountPage";
import { CounterProvider } from "./components/StoreCounter";

function App() {
  return (
    <CounterProvider count={7}>
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
              <CountPage />
              <SimpleTodo />
              <SimpleRouter />
            </components>
          </section>
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
