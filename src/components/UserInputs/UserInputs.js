import React from "react";
import styles from "./UserInput.module.css";

export default function UserForm() {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [ageInput, setAgeInput] = React.useState("");

  function onUsernameChangeHandler(event) {
    if (event.target.value === "") console.log("wrong input - TO DO");
    else console.log("input correct");
    setUsernameInput(event.target.value);
  }

  function onAgeChangeHandler(event) {
    if (event.target.value === "" || event.target.value < 0)
      console.log("wrong input - TO DO");
    else console.log("input correct");
    setAgeInput(event.target.value);
  }

  function onSubmitHandler() {
    const userData = {
      username: usernameInput,
      age: ageInput,
    };
    console.log(userData);
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles["form-inputs"]}>
        <div className={styles["form-inputs-pair"]}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={usernameInput}
            onChange={onUsernameChangeHandler}
          />
        </div>
        <div className={styles["form-inputs-pair"]}>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={ageInput}
            onChange={onAgeChangeHandler}
          />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button className={styles["button-reset"]}>Reset</button>
        <button type="submit" className={styles["button-submit"]}>
          Add User
        </button>
      </div>
    </form>
  );
}
