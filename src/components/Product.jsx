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
    backggcgggfgggvggfddrggtfroundSize: 'cover'
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
    flexDirection: 'column',import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}
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
    backggcgggfgggvggfddrggtfroundSize: 'cover'
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
    flexDirection: 'column',import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}
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

    }
 
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};

export default Section;
iimport { Box, Typography, styled } from '@mui/material';

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
    backggcgggfgggvggfddrggtfroundSize: 'cover'
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
    flexDirection: 'column',import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}
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



const Component = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#f5f5f5',
    color: '#000',
import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}

        </div>
    );
    }
 
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};



xport default Section;
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



const Component = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#f5f5f5',
    color: '#000',
import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}

        </div>
    );
    }
 
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};



xport default Section;
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


    }
 
        <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
      </Typography>
    </Component>
  );
};

export default Section;
iimport { Box, Typography, styled } from '@mui/material';

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
    backggcgggfgggvggfddrggtfroundSize: 'cover'
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
    flexDirection: 'column',import React from 'react';
// import Home from './pages/Home';
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
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
         <div>
        <Header />
        <Info />
        <Section  data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone} />
        <Section  data={productsSection.macbookpro}/>
        <Products />
{/* .khugyg;ihuasdajhvvjhmvhmj.oihifdytfjdhjvjhv,hvh,gugqahuHVV,HQS    S   SUHegefwe,iyflu, */}
        {/* dewd */}
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

export default About;












