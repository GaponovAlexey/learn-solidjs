import { createSignal, createResource, For, Show } from "solid-js";

const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const Async = () => {
  const [userId, setUserId] = createSignal(),
    [user] = createResource(userId, fetchUser);

  return (
    <>
    <h1>People: Id</h1>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.target.value)}
        className="text-black"
      />
      <span>{user.loading && "Loading..."}</span>
      <div className="">
        {/* <pre className="font-black">{JSON.stringify(user(), null, 2)}</pre> */}
        <p>
          <Show when={user}>
            {
              <div>
                <div>Name:{user()?.name}</div>
                <div>mass:{user()?.mass}</div>
              </div>
            }
          </Show>
        </p>
      </div>
    </>
  );
};

export default Async;
