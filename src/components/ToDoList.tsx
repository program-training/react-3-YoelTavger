import { useState, useEffect } from "react";

interface Props {
  userId: number | null;
}

export default function ToDoList(props: Props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonData = await data.json();
      setTasks(jsonData.fil);      
    };
    fetchData();
  }, []);


  return (    
    <div>
      <li>{props.userId}</li>
      <li>{props.userId}</li>
      <li>{props.userId}</li>
      <li>{props.userId}</li>
      <li>{props.userId}</li>
    </div>
  );
}
