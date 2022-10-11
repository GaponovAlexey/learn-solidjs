import { createSignal, onCleanup } from "solid-js";
import { Match, Switch } from "solid-js/web";

function createRouteHandler() {
  const [location, setLocation] = createSignal(
      window.location.hash.slice(1) || "home"
    ),
    locationHandler = () => setLocation(window.location.hash.slice(1));

  window.addEventListener("hashchange", locationHandler);

  onCleanup(() => window.removeEventListener("hashchange", locationHandler));
  return (e) => e === location();
}

const Home = () => (
  <>
    <p>page Home</p>
  </>
);

const Profile = () => (
  <>
    <p>page Profile</p>
  </>
);

const Settings = () => (
  <>
    <p>page Settings</p>
  </>
);

const SimpleRouter = () => {
  const matches = createRouteHandler();
  return (
    <div className="flex">
      <Switch>
        <Match when={matches("home")}>
          <Home />
        </Match>
        <Match when={matches("profile")}>
          <Profile />
        </Match>
        <Match when={matches("settings")}>
          <Settings />
        </Match>
      </Switch>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};
export default SimpleRouter;
