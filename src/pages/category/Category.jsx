import { useLocation } from "react-router";

export default function Category() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="home">
      </div>
    </>
  );
}