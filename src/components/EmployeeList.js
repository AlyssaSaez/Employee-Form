import React from 'react';

function EmployeeList({ employees, onRemoveEmployee }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <p>Total Employees: {employees.length}</p>
      <ul>
  {employees.map((employee, index) => (
    <li key={index}>
      <button onClick={() => onRemoveEmployee(index)} className="remove-btn">X</button>
      {employee.name} – {employee.title}, {employee.department}
    </li>
  ))}
</ul>

    </div>
  );
}

export default EmployeeList;
