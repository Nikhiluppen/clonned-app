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


export default About;

export default About;

import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
export default EmployeeList;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyAppimport React, { useEffect, useState } from 'react';
import axios from 'axios';
cggvcfzdfgfcguhfghcggf
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
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)({
  width: '100%',
  height: 580,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 47,
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});
cgyhbccddfftggggggffffff flag chicanery tdh such catchy inducing
const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: 56
});

const SubHeading = styled(Typography)({
  fontSize: 28,
  padding: '0 0 5px 0'
});

const linkStyle = {
  color: '#2997ff',
  padding: '0 30px',
  fontSize: 21,
  cursor: 'pointer'
};

const Section = ({ data = {} }) => {
  const {
    imageURL = '',
    heading = '',
    headColor = '#000',
    subHeading = '',
    subHeadColor = '#333'
  } = data;

  return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        </import React from 'react';
        // import Home from './pages/Home';
        import Header from '../components/Header';
        import Info from '../components/Info';
        import Section from '../components/Section';
        import Products from '../components/Products';

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  

export default About;

export default About;

import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <v
      import SearchIcon from '@mui/icons-material/Search';
      import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
      import { applelogo,navData } from '../constants/constant';
      // import { Opacity } from '@mui/icons-material';  
      
      export default About;
      
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
        import SearchIcon from '@mui/icons-material/Search';
        import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
        import { applelogo,navData } from '../constants/constant';
        // import { Opacity } from '@mui/icons-material';  
        
        export default About;
        
        export default About;
        
        import React from 'react';
        
        const About = () => {
          return (
            <div style={{ padding: '2rem', color: '#333' }}>
              <h1>About Us</h1>
              <p>This is the About page. Learn more about what we do!</p>
            </div>
          );
          );
          );
          );vh1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
  export default EmployeeList;
  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css'; // optional for custom styling
  
  const Navbar = () => {
    return (
      <nav className="navbar">
        <h2 className="logo">MyAppimport React, { useEffect, useState } from 'react';
  import axios from 'axios';
  cggvcfzdfgfcguhfghcggf
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
  import { Box, Typography, styled } from "@mui/material";
  
  const Component = styled(Box)({
    width: '100%',
    height: 580,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 47,
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  });
  cgyhbccddfftggggggffffff flag chicanery tdh such catchy inducing
  const Heading = styled(Typography)({
    fontWeight: 600,
    fontSize: 56
  });
  
  const SubHeading = styled(Typography)({
    fontSize: 28,
    padding: '0 0 5px 0'
  });
  
  const linkStyle = {
    color: '#2997ff',
    padding: '0 30px',
    fontSize: 21,
    cursor: 'pointer'
  };
  
  const Section = ({ data = {} }) => {
    const {
      imageURL = '',
      heading = '',
      headColor = '#000',
      subHeading = '',
      subHeadColor = '#333'
    } = data;
  
    return (
      <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
        <Heading style={{ color: headColor }}>{heading}</Heading>
        <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
        <Typography>
          </import React from 'react';
          // import Home from './pages/Home';
          import Header from '../components/Header';
          import Info from '../components/Info';
          import Section from '../components/Section';
          import Products from '../components/Products';
  
  import Box from '@mui/material/Box';
  import { Typography , styled } from '@mui/material';
  
  
  import SearchIcon from '@mui/icons-material/Search';
  import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
  import { applelogo,navData } from '../constants/constant';
  // import { Opacity } from '@mui/icons-material';  
  
  export default About;
  
  export default About;
  
  import React from 'react';
  
  const About = () => {
    return (
      <div style={{ padding: '2rem', color: '#333' }}>
        <h1>About Us</h1>
        <p>This is the About page. Learn more about what we do!</p>
      </div>
    );
    import SearchIcon from '@mui/icons-material/Search';
    import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
    import { applelogo,navData } from '../constants/constant';
    // import { Opacity } from '@mui/icons-material';  
    
    export default About;
    
    import SearchIcon from '@mui/icons-material/Search';
    import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
    import { applelogo,navData } from '../constants/constant';
    // import { Opacity } from '@mui/icons-material';  
    
    export default About;
    
    export default About;
    
    import React from 'react';
    
    const About = () => {
      return (
        <div style={{ padding: '2rem', color: '#333' }}>
          <h1>About Us</h1>
          <p>This is the About page. Learn more about what we do!</p>
        </div>
      );
      );
      );
      );v
    export default About;
    
    import React from 'react';
    
    const About = () => 
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return ( {
      return (
        const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return ( 
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return ( 
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return ( 
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return ( 
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
          <div style={{ padding: '2rem', color: '#333' }}>
            <h1>About Us</h1>
            <p>This is the About page. Learn more about what we do!</p>
          </div>
        );
        );
        );
        );v
      export default About;
      
      import React from 'react';
      
      const About = () => {
        return (
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  

export default About;

export default About;

import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );



import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)({
  width: '100%',
  height: 580,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 47,
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});
cgyhbccddfftggggggffffff flag chicanery tdh such catchy inducing
const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: 56
});

const SubHeading = styled(Typography)({
  fontSize: 28,
  padding: '0 0 5px 0'
});

const linkStyle = {
  color: '#2997ff',
  padding: '0 30px',
  fontSize: 21,
  cursor: 'pointer'
};

const Section = ({ data = {} }) => {
  const {
    imageURL = '',
    heading = '',
    headColor = '#000',
    subHeading = '',
    subHeadColor = '#333'
  } = data;

  return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        </import React from 'react';
        // import Home from './pages/Home';
        import Header from '../components/Header';
        import Info from '../components/Info';
        import Section from '../components/Section';
        import Products from '../components/Products';

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';
const Section = ({ data = {} }) => {
  const {
    imageURL = '',
    heading = '',
    headColor = '#000',
    subHeading = '',
    subHeadColor = '#333'
  } = data;

  return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        </import React from 'react';
        // import Home from './pages/Home';
        import Header from '../components/Header';
        import Info from '../components/Info';
        import Section from '../components/Section';
        import Products from '../components/Products';

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  
 return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        </import React from 'react';
        // import Home from './pages/Home';
        import Header from '../components/Header';
        import Info from '../components/Info';
        import Section from '../components/Section';
        import Products from '../components/Products';

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  
 return (
    <Component style={{ background: `url(${imageURL}) 50% 50% no-repeat` }}>
      <Heading style={{ color: headColor }}>{heading}</Heading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <Typography>
        </import React from 'react';
        // import Home from './pages/Home';
        import Header from '../components/Header';
        import Info from '../components/Info';
        import Section from '../components/Section';
        import Products from '../components/Products';

import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  
