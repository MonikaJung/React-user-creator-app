import React from "react"; 
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [usersList, setUsersList] = React.useState([
    {
      id: "u1",
      username: "Ala",
      age: 30,
    },
    {
      id: "u2",
      username: "Kot",
      age: 5,
    },
    {
      id: "u3",
      username: "Miko",
      age: 22,
    },
  ]);

  function addUserHandler (user) {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.unshift({ username: user.username, age: user.age, id: Math.random().toString() });
      return updatedUsersList;
    });
  }

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = prevUsersList.filter((user) => user.id !== userId);
      return updatedUsersList;
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList usersList={usersList} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
