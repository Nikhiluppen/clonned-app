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
     hhhhhhhhhcgcggcghhvghhhhhccc   Get the latest information on Apple products and services, including news,
        updates, and more. Shop now to get great deals and enjoy free shipping
        on orders over $50 of selected items.*{" "}
        <span style={{ color: "#2997ff" }}>Shop now &gt;</span>
      </Typography>
    </Component>
  );
};

export default Info;


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

