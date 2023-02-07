import { EmployeeCard } from "../EmployeeCard/EmployeeCard"
import "./EmployeeContainer.css"

export const EmployeeContainer = ({employeeData, filteredEmployeeFromList}) => {

    //mapping through the employee data to link the employee list and filtered list to employee card
  return (
    <div className="EmployeeContainer">

        {employeeData.map((employee) => (
            <EmployeeCard 
            employee={employee}
            filteredEmployeeFromList={filteredEmployeeFromList} 
            />
        ))}

    </div>
  );
}
