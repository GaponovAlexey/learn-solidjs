import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const CounterContext = createContext([{ count: 0 }, {}]);

export const CounterProvider = (props) => {
  const [state, setState] = createStore({ count: props.count || 0 }),
    store = [
      state,
      {
        increment() {
          setState("count", (c) => c + 1);
        },
        decrement() {
          setState("count", (c) => c - 1);
        },
      },
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  return useContext(CounterContext);
}
