import { useState, useEffect } from "react";

export default function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  //* conmponentDidMount, componentDidUpdate - be called every change
  // useEffect(() => sayHello());
  //* componentDidMount, componentWillUpdate(only number - dependency)
  // useEffect(() => sayHello(), [number]);
  //* componentDidMount(no dependency - only be called once)
  useEffect(() => sayHello(), []);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
