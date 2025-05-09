import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const removeEmployee = (indexToRemove) => {
    const updatedEmployees = employees.filter((_, index) => index !== indexToRemove);
    setEmployees(updatedEmployees);
  };
  
  return (
<div className="App">
  <div className="employee-container">
    <EmployeeForm onAddEmployee={addEmployee} />
    <EmployeeList
  employees={employees}
  onRemoveEmployee={removeEmployee}
/>
  </div>
</div>

  );
}

export default App;
