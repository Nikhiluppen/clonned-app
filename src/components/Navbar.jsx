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
export default Navbar;});

const linkStyle = {
  color: '#2997ff',
  padding: '0 30px',
  fontSize: 21,
  cursor: 'pointer',
};

const Section = ({ data = {} }) => {
  const {
    imageURL = '',
    heading = '',
    headColor = '#000',
    subHeading = '',
    subHeadColor = '#333',
  } = data;

  return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        <Typography component="span" style={linkStyle}>
          Learn more &gt;
        </Typography>
        <Typography component="span" style={linkStyle}>
          Buy &gt;
        </Typography>
      </Typography>
    </Componentimport React from 'react';
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
    import React from 'react';
    
    const About = () => {
      return (
        <div style={{ padding: '2rem', color: '#333' }}>
          <h1>About Us</h1>
          <p>This is the About page. Learn more about what we do!</p>
        </div>
      );
    };
    
    export default About;
    import { Box, Typography, styled } from '@mui/material';
    
    const Component = styled(Box)({
      width: '100%',
      height: 580,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 47,
      objectFit: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    });
    
    const Heading = styled(Typography)({
      fontWeight: 600,
      fontSize: 56,
    });
    
    const SubHeading = styled(Typography)({
      fontSize: 28,
      padding: '0 0 5px 0',
    });
    
    const linkStyle = {
      color: '#2997ff',
      padding: '0 30px',
      fontSize: 21,
      cursor: 'pointer',
    };
    
    const Section = ({ data = {} }) => {
      const {
        imageURL = '',
        heading = '',
        headColor = '#000',
        subHeading = '',
        subHeadColor = '#333',
      } = data;
    
      return (
        <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
          <Heading style={{ color: headColor }}>{heading}</Heading>
          <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
          <Typography>
            <Typography component="span" style={linkStyle}>
              Learn more &gt;
            </Typography>
            <Typography component="span" style={linkStyle}>
              Buy &gt;
            </Typography>
          </Typography>
        </Component>
      );
    };
    
    export default Section;
    
    import React from 'react';
    import { Box, Typography, styled } from '@mui/material';
    
    const Component = styled(Box)({
      width: '100%',
      height: 580,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 47,
      objectFit: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    });
    
    const Heading = styled(Typography)({
      fontWeight: 600,
      fontSize: 56,
    });
    
    const SubHeading = styled(Typography)({
      fontSize: 28,
      padding: '0 0 5px 0',
    });
    
    const linkStyle = {
      color: '#2997ff',
      padding: '0 30px',
      fontSize: 21,
      cursor: 'pointer',
    };
    
    const Section = ({ data = {} }) => {
      const {
        imageURL = ''',
    subHeadColor = '#333',
  } = data;import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to Our Handyman Service</h2>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
