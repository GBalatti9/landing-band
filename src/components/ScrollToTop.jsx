import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/base';
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 50;

            setIsVisible(scrollTop > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={scrollToTop}
                style={{ 
                    position: 'fixed', 
                    bottom: '20px', 
                    right: '20px', 
                    display: isVisible ? 'block' : 'none', 
                    padding: '10px',
                    border: 'none',
                    borderRadius: '12px',
                    // backgroundColor: 'transparent',
                }}
            >
                SUBIR
                <FontAwesomeIcon icon={faUpLong} style={{ paddingLeft: '5px' }}/>
            </Button>
        </>
    )
}
