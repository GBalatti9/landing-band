import './Header.css';
import { Box, Typography } from "@mui/material";
import background from '../assets/trago-amargo1.jpg';
import { NavBar } from './NavBar';


export const Header = () => {
    return (
        <>
            <Box position="relative">
                <NavBar />
                <Typography 
                    variant='h1' 
                    sx={{ 
                        width: '100%',
                        textAlign: 'center',
                        position: 'absolute', 
                        color: 'yellow', 
                        fontSize: '4rem', 
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontFamily: 'Bebas Neue', 
                        textShadow: '1px 1px 1px black'}}> 
                        Trago Amargo 
                    </Typography>
                <Box className='header-container'>
                    <img src={ background } alt='trago-amargo-lucille' />
                </Box>
            </Box>
        </>
    )
}
