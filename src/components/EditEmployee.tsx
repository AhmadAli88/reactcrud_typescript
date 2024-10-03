import React, { useState } from 'react'
import { IEmployee } from './Employee.type'
import "./EmployeeForm.css";

type Props={
  data: IEmployee,
  onBackClick: () => void;
  onUpdatedClickHnd: (data: IEmployee) => void;
}
const EditEmployee = (props: Props) => {
  const { data, onBackClick, onUpdatedClickHnd } = props
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdatedClickHnd(updatedData);
    onBackClick();
  };
  return (
    <div>
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
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditEmployee