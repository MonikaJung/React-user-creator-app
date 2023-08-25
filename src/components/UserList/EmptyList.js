import React from "react";
import styles from "./EmptyList.module.css";

export default function EmptyList() {
  return (
    <div className={styles["empty-list"]}>
      <h2>No users found. Maybe add one?</h2>
    </div>
  );
}
