import { Link } from "react-router-dom";

export default function Home(prop) {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/login"}> Login</Link>
    </>
  );
}
