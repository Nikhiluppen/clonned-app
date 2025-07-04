import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyAppimport React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
<style>
    
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 1rem 2rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>

export default Navbar;
export default Navbar;
export default Navbar;