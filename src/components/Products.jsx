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
frccvvbvcxzsfvbbbb. bbjuggfffthhjuhgfdd
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
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
      <SubHeading style={{ color: subHeadColor }}>{subHeading}</SubHeading>
};});

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
