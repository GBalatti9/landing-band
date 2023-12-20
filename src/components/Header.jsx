import './Header.css';
import { Box } from "@mui/material";
import background from '../assets/trago-amargo1.jpg';


export const Header = () => {
    return (
        <>
            <Box className='header-container' >
                <img src={ background } alt="" />
            </Box>
        </>
    )
}
