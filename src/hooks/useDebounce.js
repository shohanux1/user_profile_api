import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await fetch(`https://api.github.com/users/${value}`);
      const data = await res.json();
      setData(data);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return data;
};

export default useDebounce;
