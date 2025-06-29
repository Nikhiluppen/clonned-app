import { Box, Typography, styled } from '@mui/material';

// Styled Components
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

// Functional ComponentwedqwQWD DXWQDDdqwsqdqdqwdqc   wdwdQDQWDQW,HGGF,YGYG,ILYGsaEWD
const Product = ({ data = {} }) => {
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
                <Typography component="span" style={linkStyle}>Learn more &gt;</Typography>
                <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
            </Typography>
        </Component>
    );
};
// JRBGHDERBFYAGHIHFImyftkdsFDBHSBVDKJBVdqwKJGBHJKGBHmyftkdsFDBHSBVDKJBVdqwKJGBHJKGBHGREYFghghghlasdkfga<Gcyegflge,sjfbcxvhlayergrfwefg,bscghdjfvbahdsjfgeuyiwg.jkb;hu;hlh bgugh;

export default Product;


import { Box, Typography, styled } from '@mui/material';

// Styled Components efceceerf13f3fihewdfe;qwd  sD  Shfwehdwd;.wodqwdqdqdq1dxqd    qhd.whF,JFGJM
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

// Functional Component
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
                <Typography component="span" style={linkStyle}>Learn more &gt;</Typography>
                <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
            </Typography>
        </Component>
    );
};
<style>.navbar {
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

export default Section;


import React from 'react';

const About = () => {
  return (
    <div stimport React, { useEffect, useState } from 'react';
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
yle={{ padding: '2rem', color: '#333' }}>
      <h1>About Us</h1>
      <p>This is the About page. Learn more about what we do!</p>
    </div>
  );
};

export default About;
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
