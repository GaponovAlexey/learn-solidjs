import { createSignal, createResource } from "solid-js";

const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const Async = () => {
  const [userId, setUserId] = createSignal(),
    [user] = createResource(userId, fetchUser);
  console.log("user",user.apply());

  return (
    <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.target.value)}
        className="font-black"
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre className="font-black">{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>
  );
};

export default Async;
