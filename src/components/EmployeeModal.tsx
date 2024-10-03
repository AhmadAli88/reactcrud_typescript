import React from "react";
import "./EmployeeModal.css";
import { IEmployee } from "./Employee.type";

type Props = {
  onClose: () => void;
  data: IEmployee;
};
const EmployeeModal = (props: Props) => {
    const {onClose, data} = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>
            <h3>Employee Data</h3>
            <p>ID: {data.id}</p>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
