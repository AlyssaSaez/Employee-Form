import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save to localStorage when employees array changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Add a new employee to state
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <EmployeeForm onAddEmployee={addEmployee} />
    </div>
  );
}

export default App;
