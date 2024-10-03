import React, { useEffect, useState } from "react";
import "./Home.css";
// import { dummyEmployee, IEmployee, PageEnum } from "./Employee.type";
import { IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  // const [employeeList, setEmployeeList] = useState(
  //   dummyEmployee as IEmployee[]
  // );
  const [employeeList, setEmployeeList] = useState(
    [] as IEmployee[]
  );
  const [shownPage, setShowPage] = useState(PageEnum.list);
  const [dataEdit, setDataEdit] = useState({} as IEmployee);

useEffect(()=>{
 const list=window.localStorage.getItem("employeeList")
 if(list) {
  _setEmployeeList(JSON.parse(list))
 }
},[])

  function onAddEmployeeClick(){
    setShowPage(PageEnum.add);
    
  }

  const showListPage=() =>{
    setShowPage(PageEnum.list);
  }
  const addEmployeeHnd=(data: IEmployee) =>{
    debugger
    _setEmployeeList([...employeeList, data])
  }
  const deleteEmployee=(data: IEmployee) =>{
   const index = employeeList.indexOf(data)
   const temp = [...employeeList]
   temp.splice(index, 1)
   _setEmployeeList(temp)
  }
  const editEmployee = (data: IEmployee) => {
   setShowPage(PageEnum.edit)
   setDataEdit(data)
  };
  const updatedDataHandler=(data: IEmployee ) => {
   const filterData = employeeList.filter(e => e.id === data.id)[0];
   const indexRecord= employeeList.indexOf(filterData)
   const tempData = [...employeeList];
  tempData[indexRecord]= data;
  _setEmployeeList(tempData)

  }
  const _setEmployeeList=(list: IEmployee[])=>{
   
    setEmployeeList(list)
    window.localStorage.setItem("employeeList", JSON.stringify(list))
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
              className="add-emp-btn"
            />
            <EmployeeList list={employeeList} onDeleteHandler={deleteEmployee} onEdit={editEmployee} />
          </>
        )}
        {
          shownPage === PageEnum.add && <AddEmployee onBackClick={showListPage} onSubmitClickHnd={addEmployeeHnd}/>
        }
         {
          shownPage === PageEnum.edit && <EditEmployee data={dataEdit} onBackClick={showListPage} onUpdatedClickHnd={updatedDataHandler}/>
        }
      </section>
    </div>
  );
};

export default Home;
