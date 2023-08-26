import React from "react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onOKClick}>OK</button>
        </footer>
      </div>
    </div>
  );
}
