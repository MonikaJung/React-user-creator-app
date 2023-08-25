import React from "react";
import styles from "./UserList.module.css";

export default function UserItem(props) {
  return <div className={styles["user-item"]}>
    <div>{props.username} ({props.age} years old)</div>
  </div>;
}