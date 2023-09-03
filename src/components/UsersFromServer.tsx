import { useState, useEffect, SetStateAction } from "react";
import UserCard from "./UserCard";

interface User {
  id: SetStateAction<null>;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersFromServer() {
  const [users, setResult] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await data.json();
      setResult(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard name={user.name} email={user.email} id={user.id}/>
      ))}
    </div>
  );
}
