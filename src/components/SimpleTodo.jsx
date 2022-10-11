import { createEffect, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

const SimpleTodo = () => {
  const createLocalStore = (initState) => {
    const [state, setState] = createStore(initState);

    if (localStorage.todos) setState(JSON.parse(localStorage.todos));

    createEffect(() => (localStorage.todos = JSON.stringify(state)));
    return [state, setState];
  };

  const [newTitle, setTitle] = createSignal("");
  const [todos, setTodos] = createLocalStore([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos(todos.length, {
      title: newTitle(),
      done: false,
    });
    setTitle("");
  };
  return (
    <>
      <h3>Simple Todos Example</h3>
      <form onSubmit={addTodo}>
        <input
          className="text-black"
          placeholder="enter todo and click +"
          required
          value={newTitle()}
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
        <button>+</button>
      </form>
      <For each={todos}>
        {(todo, i) => (
          <div className="text-black" >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => setTodos(i(), "done", e.currentTarget.checked)}
            />
            <input
              type="text"
              value={todo.title}
              onChange={(e) => setTodos(i(), "title", e.currentTarget.value)}
            />
            <button
            className="text-red-300"
              onClick={() =>
                setTodos((t) => [...t.slice(0, i()), ...t.slice(i() + 1)])
              }
            >
              x
            </button>
          </div>
        )}
      </For>
    </>
  );
};

export default SimpleTodo;
