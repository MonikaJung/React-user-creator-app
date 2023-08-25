import React from "react";
import styles from "./UserInput.module.css";

export default function UserForm() {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [ageInput, setAgeInput] = React.useState("");
  const [isUsernameCorrect, setIsUsernameCorrect] = React.useState(true);
  const [isAgeCorrect, setIsAgeCorrect] = React.useState(true);

  function onUsernameChangeHandler(event) {
    if (event.target.value !== "") setIsUsernameCorrect(true);
    setUsernameInput(event.target.value);
  }

  function onAgeChangeHandler(event) {
    if (event.target.value !== "") setIsAgeCorrect(true);
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
      cleanInputs();
    }
    else console.log("SUBMIT DENIED");
  }

  function areInputsValid(){
    let isAgeOK = false;

    if (ageInput === "" || ageInput < 0 || ageInput > 180)
      setIsAgeCorrect(false);
    else {
      setIsAgeCorrect(true);
      isAgeOK = true;
    }

    return isUsernameValid() && isAgeOK;
  }

  function isUsernameValid() {
    let isUsernameOK = false;
    const usernameRegEx = new RegExp("^[A-Za-z]+[A-Za-z0-9_.@//-]*[A-Za-z0-9_.//-]+[A-Za-z0-9]+$");

    if (usernameInput === "" || !usernameRegEx.test(usernameInput)) setIsUsernameCorrect(false);
    else {
      setIsUsernameCorrect(true);
      isUsernameOK = true;
    }
    return isUsernameOK;
  }

  function isAgeValid() {
    let isAgeOK = false;

    if (ageInput === "" || ageInput < 0 || ageInput > 180)
      setIsAgeCorrect(false);
    else {
      setIsAgeCorrect(true);
      isAgeOK = true;
    }
    return isAgeOK;
  }

  function onResetHandler(event) {
    event.preventDefault();
    cleanInputs();
    console.log("RESET");
  }

  function cleanInputs() {
    setUsernameInput("");
    setAgeInput("");
    setIsUsernameCorrect(true);
    setIsAgeCorrect(true);
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
          {!isUsernameCorrect && <p>Username must start with A letter, end with a letter or a number 
            <br/>and&nbsp;-_.@ signs and contain only letters, numbers.</p>}
        </div>
        <div className={styles["form-inputs-pair"]}>
          <label htmlFor="age">User Age: </label>
          <input
            type="number"
            id="age"
            value={ageInput}
            onChange={onAgeChangeHandler}
          />
          {!isAgeCorrect && <p>Age must be a number bigger than 0 and smaller or equal 180.</p>}
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
