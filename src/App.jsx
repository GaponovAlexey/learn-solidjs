import { A, Route, Routes } from "@solidjs/router";
import styles from "./App.module.css";
import Async from "./components/Async";
import CountPage from "./components/CountPage";
import HomeTest from "./components/HomeTest";
import SimpleRouter from "./components/SimpleRouter";
import SimpleTodo from "./components/SimpleTodo";
import { CounterProvider } from "./components/StoreCounter";
import Timer from "./components/Timer";
import logo from "./logo.svg";
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
              <Async />
            </components>
            <div>
              <Routes>
                <Route path="/users" component={HomeTest}>link</Route>
              </Routes>
                <A href="/users">users</A>
            </div>
          </section>
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
