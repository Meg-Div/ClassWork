
import React from 'react';
import "./EmployeeCard.css"


export const EmployeeCard = ({employee, filteredEmployeeFromList}) => {

    //mapping through the employee data to create a new divs for each employee
    return (
    <div className="Employee">   

       <div className="NamePic"> 
            
            <img id="img" src={employee.profile_picture} alt="" />

            <h2>
                {employee.first_name} {employee.last_name}
            </h2>

            <p>{employee.sector}</p>

            <p>{employee.email}</p>

            <button id="button" onClick={() => filteredEmployeeFromList(employee)}>Remove Employee</button>

        </div>

    </div>
  );
};
