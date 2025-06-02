//*https://developer.mozilla.org/en-US/docs/Web/API/Notification
export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // console.log("newly granted");
          new Notification(title, { ...options, tag: `${Date.now()}` });
        } else {
          return;
        }
      });
    } else {
      // console.log("already granted");
      new Notification(title, { ...options, tag: `${Date.now()}` });
    }
  };
  return fireNotification;
};

export default function App() {
  const triggerNotification = useNotification("Welcome", {
    body: "Nice to meet you",
  });
  return (
    <div>
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
}
