
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
        // fafdsFDBHSBVDKJBVHLYWERGFBHFGEYLA
    }
export default Header;