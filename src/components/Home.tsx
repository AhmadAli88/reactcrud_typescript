import React, { useState } from "react";
import "./Home.css";
import { dummyEmployee, IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployee as IEmployee[]
  );
  const [shownPage, setShowPage] = useState(PageEnum.list);
  function onAddEmployeeClick(){
    setShowPage(PageEnum.add);
  }

  const showListPage=() =>{
    setShowPage(PageEnum.list);
  }
  const addEmployeeHnd=(data: IEmployee) =>{
    debugger
    setEmployeeList([...employeeList, data])
  }
  return (
    <div>
      <article className="article_header">
        <h1>React crud application</h1>
      </article>
      <section className="section_content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClick}
            />
            <EmployeeList list={employeeList} />
          </>
        )}
        {
          shownPage === PageEnum.add && <AddEmployee onBackClick={showListPage} onSubmitClickHnd={addEmployeeHnd}/>
        }
      </section>
    </div>
  );
};

export default Home;
