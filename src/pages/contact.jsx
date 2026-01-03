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
<html>
    <body>
        <!-- <h1>
            JavaScript variables
        </h1><p id="demo"></p>
        <script>
            // usage of varible in 3 ways like var, let, const.
            // var x= 2;
            // var y = 5;
            // var z = x+y;

            let x= 2;
            let y = 5;
            let z = x+y;

            document.getElementById("demo").innerHTML = ("valoe of z: " +z);

        </script> -->

        <h1>javaScript operators</h1>
        <p id="output"></p>

        <script>

            let result="";

            let a =10, b=5;
            result += "addition: " +(a+b)+ "<br>";
            result +="sub" +(a-b) + "<br>";

            document.getElementById("output").innerHTML=result;
        </script>


<h1> function</h1>
<p id="demo1"></p>
<script>
    function myfun(p1,p2){
        return p1+p2;
    }
    let result1= myfun(4,5);
    document.getElementById("demo1").innerHTML= result1;
</script>
        
    </body>
</script>            </body></html>    function myfun(p1,p2){<script><p id="demo1"></p><h1> function</h1>1237<
</html>
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
};

export default About;
