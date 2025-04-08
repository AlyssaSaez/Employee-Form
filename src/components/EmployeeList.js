import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} – {employee.title}, {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
