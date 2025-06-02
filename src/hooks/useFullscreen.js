import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFullscreen) => {
    if (callback && typeof callback === "function") {
      callback(isFullscreen);
    }
  };
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen;
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCallback(true);
    }
  };
  const exitFullscreen = () => {
    if (element.current.exitFullscreen) {
      element.current.exitFullscreen();
    } else if (element.current.mozCancelFullscreen) {
      element.current.mozExittFullscreen;
    } else if (element.current.webkitExitFullscreen) {
      element.current.webkitExittFullscreen();
    } else if (element.current.msExitFullscreen) {
      element.current.msExittFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFullscreen, exitFullscreen };
};

export default function App() {
  const onFullscreen = (isFullscreen) => {
    console.log(
      isFullscreen ? "We are on fullscreen" : "We are on small screen",
    );
  };
  const { element, triggerFullscreen, exitFullscreen } =
    useFullscreen(onFullscreen);
  return (
    <div>
      <div ref={element}>
        <img
          style={{ width: "250px" }}
          src="https://github.com/feelsuegood.png"
        />
        <button onClick={triggerFullscreen}>Make fullscreen</button>
        <button onClick={exitFullscreen}>Exit fullscreen</button>
      </div>
    </div>
  );
}
