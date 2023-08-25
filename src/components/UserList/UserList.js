import React from "react";
import styles from "./UserList.module.css";

import UserItem from "./UserItem";

export default function UserList(props) {
  function onDeleteUserHandler (userID) {
    props.onDeleteUser(userID);
  }
  
  return (
    <div className={styles["user-list"]}>
      <h2>USERS</h2>
      {props.usersList.map((user) => (
        <UserItem key={user.id} id={user.id} username={user.username} age={user.age} onDeleteUser={onDeleteUserHandler}/>
      ))}
    </div>
  );
}
