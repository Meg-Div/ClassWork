import './App.css'
import {useState} from "react";
import { employeeData } from "../src/components/employeeData";
import { EmployeeContainer } from "./components/EmployeeContainer/EmployeeContainer";

function App() {
  //setting state as employeeData
  const [employees, setEmployee] = useState(employeeData);

  //filtering employeeData
  const filteredEmployeeFromList = (person) => {

    //filtering any employees out who have the same name
    const filteredList = employees.filter(
      (employee) => employee.first_name !== person.first_name
    );

    //setting new state to filtered list
    setEmployee(filteredList);

  }
  //passing the data and function through to the Employee Container
  return (
    <div className="App">
      <EmployeeContainer 
          employeeData={employees}
          filteredEmployeeFromList={filteredEmployeeFromList}
      />
    </div>
  );
}


export default App
