import classes from "./Form.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [error, seterror] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    if (Age < 0 || Age.trim().length === 0) {
      seterror({
        title: "Invalid age",
        description: "Enter valid age(>0)",
      });
      return;
    }
    if (Name.trim().length === 0) {
      seterror({
        title: "Invalid Name",
        description: "Enter name",
      });
      return;
    }

    props.onAddUser(Name, Age);
    event.preventDefault();

    setAge("");
    setName("");
  };
  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          description={error.description}
          errorhandling={errorHandler}
        />
      )}
      <Card className={classes.applicantform}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Enter Name</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={Name}
            ></input>
          </div>

          <div>
            <label>Age (years) </label>
            <input
              type="number"
              onChange={ageChangeHandler}
              value={Age}
            ></input>
          </div>
          <Button type="submit">ADD Details</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
