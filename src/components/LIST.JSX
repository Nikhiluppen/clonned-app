import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);
hhhhhhgggggyggggggghgggggggggggggvgvggvgfgfgggvgghhbbvvggggcc. 
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

export default EmployeeList;import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
};
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);
hhhhhhgggggyggggggghgggggggggggggvgvggvgfgfgggvgghhbbvvggggcc. 
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

export default EmployeeList;import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
};



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);
hhhhhhgggggyggggggghgggggggggggggvgvggvgfgfgggvgghhbbvvggggcc. 
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

export default EmployeeList;import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
};





