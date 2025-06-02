import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!options.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

const API_URL = process.env.REACT_APP_API_URL || "PUT_YOUR_API_URL_HERE";
export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: API_URL,
  });
  // console.log(
  //   `Loading: ${loading}\nError: ${error}\nData:${JSON.stringify(data)}`
  // );
  return (
    <div>
      <h1>{data && data.data.status}</h1>
      <h2>{loading && "Loading..."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
