import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  // const coffee = useRef();
  // setTimeout(() => console.log(coffee.current), 3000);
  // setTimeout(() => coffee.current.focus(), 3000);
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      {/* <input ref={coffee} placeholder="yo" /> */}
      <h1 ref={title}>useClick</h1>
    </div>
  );
}
