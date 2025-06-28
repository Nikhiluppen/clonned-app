import React from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Section from '../components/Section';
import Products from '../components/Products';
import { productsSection } from '../constants/constant';

const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <Section data={productsSection.iphonePro} />
      <Section data={productsSection.iphone} />
      <Section data={productsSection.macbookpro} />
      <Products />
    </div>
  );
};

export default Home;
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

