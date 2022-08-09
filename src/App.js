import Form from "./components/Form/Form";

import "./App.css";
import { useState } from "react";
import UserList from "./components/Form/UserList";

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserDataHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <Form onAddUser={addUserDataHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
