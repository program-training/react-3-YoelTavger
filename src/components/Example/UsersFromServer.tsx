import { useState, useEffect } from "react";

export default function UsersFromServer(): never[] {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);
  console.log(result);
  
  return result
}
