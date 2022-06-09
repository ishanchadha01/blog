import { useLocation } from "react-router";

export default function Browse() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <h1>Coming soon!</h1>
    </>
  );
}