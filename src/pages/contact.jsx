import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out via email at contact@myapp.com.</p>
    </div>
  );
};

export default Contact;
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

export default Section;import { Box, Typography, styled } from '@mui/material';

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

aphy component="span" style={linkStyle}>Learn more &gt;</Typography>
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};

export default Section;
import { Box, Typography, styled } from '@mui/material';
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
        <Typography component="span" style={linkStyle}>Learn more &gt;</Typography>
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};

export default Section;
import { Box, Typography, styled } from '@mui/material';
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

export const applelogo = "https://cdn-icons-png.flaticon.com/512/0/747.png";


export const navData = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support'
];

export const productsSection = {
    iphonePro: {
        heading: 'iPhone 15 Pro',
        headColor: '#fff',
        subHeading: 'Titanium. So Strong. So light. So Pro.',
        subHeadColor: '#fff',
        imageURL: 'https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large.jpg'
    },
    iphone: {
        heading: 'iPhone 15',
        headColor: '#1d1d1f',
        subHeading: 'New camera. New design. Newphoria',
        subHeadColor: '#1d1d1f',
        imageURL: 'https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large.jpg'
    },
    macbookpro: {
        heading: 'MacBook Pro',
        headColor: '#1d1d1f',
        subHeading: 'Supercharged for pros',
        subHeadColor: '#1d1d1f',
        imageURL: 'https://www.apple.com/v/home/ag/images/heroes/macbook-pro/hero_macbookpro__eatonjfwvuc2_large.jpg'
    }
}

export const products = {
    watch: {
        heading: 'WATCH',
        subHeading: 'Introducing our largest display yet',
        imageURL: 'https://www.apple.com/v/home/ag/images/promos/watch-series-7/tile_watch__e9n11b6m6yq2_large.jpg'
    },
    ipad: {
        heading: 'iPad mini',
        subHeading: 'Mega power. Mini sized',
        imageURL: 'https://www.apple.com/v/home/ag/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large.jpg'
    },
    macbook: {
        heading: 'MacBook Air 15',
        subHeading: 'Impressively big. Impossibly thin.',
        imageURL: 'https://www.apple.com/v/home/be/images/promos/macbook-air-15/promo_macbook_air_15_midnight__3zojl1nanrme_large.jpg'
    },
    homepod: {
        heading: 'HomePod mini',
        subHeading: 'Yellow orange and blue available in late November',
        imageURL: 'https://www.apple.com/v/home/ag/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_large.jpg'
    },
    arcade: {
        heading: 'Arcade',
        subHeading: 'Get 3 months free when you buy a new iPhone, iPad, iPod touch, Apple TV or Mac.',
        imageURL: 'https://www.apple.com/v/home/ag/images/promos/arcade-bundle/tile_arcade__ewkth5cd0wia_large.jpg'
    },
    applewatch: {
        heading: 'Carbon Neutral',
        subHeading: 'A first for Apple Watch. And Apple.',
        imageURL: 'https://www.apple.com/v/home/be/images/promos/apple-watch-carbon-neutral/promo_carbon_neutral__fmzt9ypcw9e2_large.jpg'
    }
}

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
