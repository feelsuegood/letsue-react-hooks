import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(3, 1);
  const fadeInP = useFadeIn(7, 2);
  return (
    <div>
      {/* <h1 ref={el} style={{opacity:0}}>React Hooks</h1> */}
      <h1 {...fadeInH1}>React Hooks</h1>
      <p {...fadeInP}>yes let's go</p>
    </div>
  );
}
