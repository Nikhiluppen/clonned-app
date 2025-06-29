import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "12px 0",
  color: "#1d1d1f",
  fontSize: "14px",
  alignItems: "center",
  height: "44px",
});

const Info = () => {
  return (
    <Component>
      <Typography>
        Get the latest information on Apple products and services, including news,
        updates, and more. Shop now to get great deals and enjoy free shipping
        on orders over $50 of selected items.*{" "}
        <span style={{ color: "#2997ff" }}>Shop now &gt;</span>
      </Typography>
    </Component>
  );
};

export default Info;
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
