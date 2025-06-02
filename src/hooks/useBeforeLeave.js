import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    // console.log("leaving...");
    // console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

export default function App() {
  const begging = () => console.log("Please don't leave");
  useBeforeLeave(begging);
  return (
    <div>
      <h1>useBeforeLeave</h1>
    </div>
  );
}
