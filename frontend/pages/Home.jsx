import { Link } from "react-router-dom";

export default function Home(prop) {
  return (
    <>
      <h1>Homeee</h1>
      <Link to={"/signin"}> Sign In</Link>
    </>
  );
}
