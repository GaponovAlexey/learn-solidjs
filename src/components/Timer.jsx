import { createSignal, onCleanup } from "solid-js";

const Timer = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>Counter: {count}</div>;
};

export default Timer;
