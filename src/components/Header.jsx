
import Box from '@mui/material/Box';
import { Typography , styled } from '@mui/material';


import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { applelogo,navData } from '../constants/constant';
// import { Opacity } from '@mui/icons-material';  



const Component = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#f5f5f5',
    color: '#000',
    alignItems: 'center',
    height: '44px',
    color: '#000',
    alignItems: 'center',
    height: '44px'
}) ;

const NavBar = styled(Box) ({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // background: '#f5f5f5',
    alignItems: 'center',
    marginLeft: '0 auto',
    '& > *': {
        marginRight: '20px',
        fontSize: '12px',
        padding: '0 21px',
        Opacity: 0.8,
        // fontWeight: 600,
        color: '#000'
    }
});

const Header = () => {
    return (
        <Component>
            <NavBar>
                <img src={applelogo} alt="logo"  style={{width: 20}}/>
                {
                    navData.map(nav  => (
                        <Typography> {nav}</Typography>
                       
                    ))  
                }
                <SearchIcon  fontSize='small'/>
                <WorkOutlineIcon fontSize='small' />
            </NavBar>
        </Component>
        )
        // fafhvmhfg,myftkdsFDBHSBVDKJBVdqwKJGBHJKGBH,GKYHLhvmgjh,ygguYWSQWSDQsxadwfiqwddqsd    cqsfdgafwfc;io   jwqdc   qj qjeifj   ;ojqi'  ji'jfERGFBHFGEYLA efnuefhuehf jhjlvf rfjhefwio fhefnefufhlwebnlc ruf
    }
export default Header;

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
  return (import React, { useEffect, useState } from 'react';
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
