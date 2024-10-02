import React from "react";
import "./EmployeeList.css";
import { IEmployee } from "./Employee.type";

type Props = {
  list: IEmployee[];
};
const EmployeeList = (props: Props) => {
  const { list } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee: IEmployee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input type="button" value="View" />
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
