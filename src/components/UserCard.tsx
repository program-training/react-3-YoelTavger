import "./UserCard.css";
import { useState, useEffect, SetStateAction } from "react";
import ToDoList from "./ToDoList";

interface Props {
  id: SetStateAction<null>;
  name: string;
  email: string;
}

export default function UserCard(props: Props) {
  const [userId, setUserId] = useState(null);

  return (
    <div className="card" onClick={() => {
        setUserId(props.id)
    }}>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <ToDoList userId={userId}/>

    </div>
  );  
}
