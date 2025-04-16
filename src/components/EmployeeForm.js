import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: '',
      confirmation: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Pass employee data up to App.js
    this.props.onAddEmployee({ ...this.state });

    // Clear the form and show confirmation
    this.setState({
      name: '',
      email: '',
      title: '',
      department: '',
      confirmation: 'Employee added successfully!'
    });

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.setState({ confirmation: '' });
    }, 3000);
  }

  render() {
    return (
      <div className="form-wrapper">
        {this.state.confirmation && (
          <p className="confirmation">{this.state.confirmation}</p>
        )}
        <form onSubmit={this.handleSubmit} className="employee-form">
          <h2>New Employee Form</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={this.state.department}
            onChange={this.handleChange}
          />
          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }  
}  

export default EmployeeForm;
