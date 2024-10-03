import React, { useState } from "react";
import "./EmployeeList.css";
import { IEmployee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteHandler: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};
const EmployeeList = (props: Props) => {
  const { list, onDeleteHandler, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [datashow, setDatashow] = useState(null as IEmployee | null);
  const viewEmployee = (data: IEmployee) => {
    setDatashow(data);
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <article className="list-header">
        <h3>Add Employee</h3>
      </article>
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
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={()=> onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteHandler(employee)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && datashow !== null && (
        <EmployeeModal onClose={onCloseModal} data={datashow} />
      )}
    </div>
  );
};

export default EmployeeList;
