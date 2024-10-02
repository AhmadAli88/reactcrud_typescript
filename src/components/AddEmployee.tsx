import React, { useState } from "react";
import "./EmployeeForm.css";
import { IEmployee } from "./Employee.type";

type Props = {
  onBackClick: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};
const AddEmployee = (props: Props) => {
  const { onBackClick, onSubmitClickHnd } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameClick = (e: any) => {
    setFirstName(e.target.value);
  };
  const onLastNameClick = (e: any) => {
    setLastName(e.target.value);
  };
  const onEmailClick = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackClick();
  };
  return (
    <div className="form-container">
      <div>Add Employee Form</div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" value={firstName} onChange={onFirstNameClick} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={onLastNameClick} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={onEmailClick} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackClick} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
