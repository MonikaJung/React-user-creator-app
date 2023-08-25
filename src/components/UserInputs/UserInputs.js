import React from "react";
import styles from "./UserInput.module.css";

export default function UserForm() {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [ageInput, setAgeInput] = React.useState("");
  const [isUsernameCorrect, setIsUsernameCorrect] = React.useState(true);
  const [isAgeCorrect, setIsAgeCorrect] = React.useState(true);

  function onUsernameChangeHandler(event) {
    setUsernameInput(event.target.value);
  }

  function onAgeChangeHandler(event) {
    setAgeInput(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    
    if(areInputsValid()) {
      const userData = {
        username: usernameInput,
        age: ageInput,
      };
      console.log("SUBMIT");
      console.log(userData);
    }
    else console.log("SUBMIT DENIED");
  }

  function areInputsValid(){
    let isUsernameOK = false;
    let isAgeOK = false;
    const usernameRegEx = new RegExp("^[A-Za-z]+[A-Za-z0-9_.@//-]*[A-Za-z0-9_.//-]+[A-Za-z0-9]+$");

    if (usernameInput === "" || !usernameRegEx.test(usernameInput)) setIsUsernameCorrect(false);
    else {
      setIsUsernameCorrect(true);
      isUsernameOK = true;
    }
    if (ageInput === "" || ageInput < 0)
      setIsAgeCorrect(false);
    else {
      setIsAgeCorrect(true);
      isAgeOK = true;
    }

    return isUsernameOK && isAgeOK;
  }

  function onResetHandler(event) {
    event.preventDefault();
    setUsernameInput("");
    setAgeInput("");
    console.log("RESET");
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
        <button className={styles["button-reset"]} onClick={onResetHandler}>
          Reset
        </button>
        <button type="submit" className={styles["button-submit"]}>
          Add User
        </button>
      </div>
    </form>
  );
}
