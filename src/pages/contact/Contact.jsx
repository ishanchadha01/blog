import { useLocation } from "react-router";

export default function Contact() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="body">
        <p>hello</p>
      </div>
    </>
  );
}