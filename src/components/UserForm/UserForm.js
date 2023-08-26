import React from "react";
import styles from "./UserForm.module.css";

import ErrorMessage from "../UI/ErrorMessage";

export default function UserForm(props) {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [ageInput, setAgeInput] = React.useState("");
  const [isUsernameCorrect, setIsUsernameCorrect] = React.useState(true);
  const [isAgeCorrect, setIsAgeCorrect] = React.useState(true);
  const [isErrorMessage, setIsErrorMessage] = React.useState(false);

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

    const isAgeOK = isAgeValid();

    if (isUsernameValid() && isAgeOK) {
      const userData = {
        username: usernameInput,
        age: ageInput,
      };
      cleanInputs();
      props.onAddUser(userData);
    } else setIsErrorMessage(true);
  }

  function isUsernameValid() {
    let isUsernameOK = false;
    const usernameRegEx = new RegExp(
      "^[A-Za-z]+[A-Za-z0-9_.@//-]*[A-Za-z0-9_.//-]+[A-Za-z0-9]+$"
    );

    if (usernameInput === "" || !usernameRegEx.test(usernameInput))
      setIsUsernameCorrect(false);
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
  }

  function cleanInputs() {
    setUsernameInput("");
    setAgeInput("");
    setIsUsernameCorrect(true);
    setIsAgeCorrect(true);
  }

  function onErrorMessageHandler() {
    setIsErrorMessage(false);
  }

  return (
    <div>
      {isErrorMessage && (
        <ErrorMessage
          title="Cannot add a new user"
          message="The username or age are incorrect. The user was not added."
          onOKClick={onErrorMessageHandler}
        />
      )}
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles["form-inputs"]}>
          <div
            className={`${styles["form-inputs-pair"]} ${
              !isUsernameCorrect && styles.invalid
            }`}
          >
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={usernameInput}
              onChange={onUsernameChangeHandler}
            />
            {!isUsernameCorrect && (
              <p>
                Username must start with A letter, end with a letter or a number
                <br />
                and&nbsp;-_.@ signs and contain only letters, numbers.
              </p>
            )}
          </div>
          <div
            className={`${styles["form-inputs-pair"]} ${
              !isAgeCorrect && styles.invalid
            }`}
          >
            <label htmlFor="age">User Age: </label>
            <input
              type="number"
              id="age"
              value={ageInput}
              onChange={onAgeChangeHandler}
            />
            {!isAgeCorrect && (
              <p>
                Age must be a number bigger than 0 and smaller or equal 180.
              </p>
            )}
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
    </div>
  );
}
