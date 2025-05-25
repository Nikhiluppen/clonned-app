import { Typography, Box, styled } from "@mui/material";


const Component = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "12px 0",
//   background: "#f5f5f5",
  color: "#1d1d1f",
  fontSize: "14px",
  alignItems: "center",
  height: "44px",
});

const  Info = () => {
    return (
       <Component>
        <Typography>
            Get the latest information on Apple products and services, and including news, updates, and more. and shop now to get more deals and eligible for free shipping on orders over $50 of selected items.* <span style={{ color: '#2997ff'}}>  Shop now &gt;</span>
        </Typography>
       </Component>
       
     
      
    );
    }

    // WFWFUERHGPUAHqwdsdqwLHFUQsafcjdbchj,cSUxhlauisdgWS qwdqwdcd QSwds dqwdwsaqdqw sqe wDSDdq7S7EELEUFGASG frververffewfwd3df3xd
export default Info;

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
        // fafdsFDBHSBVDKJBVHLYWSQWSDQsxadwfiqwddqsd    cqsfdgafwfc;io   jwqdc   qj qjeifj   ;ojqi'  ji'jfERGFBHFGEYLA efnuefhuehf jhjlvf rfjhefwio fhefnefufhlwebnlc ruf
    }
export default Header;

