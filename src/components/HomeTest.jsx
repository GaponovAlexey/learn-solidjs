import { A } from "@solidjs/router";



export const LinkPage = () => {
  return (
    <div className="text-blue-400">
      <A href="/users">/users</A>
      <br />
      <A href="/about">/about</A>
    </div>
  );
};


const HomeTest = () => {
  return <div className="min-h-[100%] bg-sky-800">About-page</div>;
};

export default HomeTest;