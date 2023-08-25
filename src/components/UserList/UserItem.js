import React from "react";
import styles from "./UserItem.module.css";

export default function UserItem(props) {
  function onDeleteClick() {
    props.onDeleteUser(props.id);
  }
  return (
    <div className={styles["user-item"]}>
      <label>
        <strong>{props.username}</strong> ({props.age} years old)
      </label>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}
