import { useCounter } from "./StoreCounter";

const NestedComponent = () => {
  const [counter, { increment, decrement }] = useCounter();
  return (
    <div className="flex justify-center">
      <p>{counter.count}</p>
      <p className="inline">
        <button className="text-green-400 text-xxl" onClick={increment}>
          +
        </button>
        <button className="text-red-400 text-xxl" onClick={decrement}>
          -
        </button>
      </p>
    </div>
  );
};

const CountPage = () => <NestedComponent />;
export default CountPage;
