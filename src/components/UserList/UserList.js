import React from "react";
import styles from "./UserList.module.css";

import UserItem from "./UserItem";

export default function UserList(props) {
  return (
    <div className={styles["user-list"]}>
      <UserItem username="" age="" />
      <UserItem username="" age="" />
      <UserItem username="" age="" />
      <UserItem username="" age="" />
      <UserItem username="" age="" />
      <UserItem username="" age="" />
    </div>
  );
}
