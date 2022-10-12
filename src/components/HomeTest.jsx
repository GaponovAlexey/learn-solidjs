import { A } from "@solidjs/router";



export const LinkPage = () => {
  return (
    <div>
      <A href="/users">users</A>
      <br />
      <A href="/about">about</A>
    </div>
  );
};


const HomeTest = () => {
  return <div>About321</div>;
};

export default HomeTest;