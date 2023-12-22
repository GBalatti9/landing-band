import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const NavBar = () => {

    const [ open, setOpen ] = useState(false);

    const handleMenuMobile = () => {
        setOpen(!open);
    };

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const handleScroll = () => {
        const usSectionPosition = document.getElementById('nosotros')?.offsetTop; 
        const contactSectionPosition = document.getElementById('contacto')?.offsetTop;
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition >= usSectionPosition && currentScrollPosition < contactSectionPosition) {
            handleCloseMenu();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                <FontAwesomeIcon
                    icon={open ? faTimes : faBars}
                    onClick={handleMenuMobile}
                    className='button-menu'
                />
            </div>
            <div className={`menu-mobile ${open ? 'active' : 'md-lg'}`}>
                <ul className='list-menu-mobile'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#nosotros" onClick={ handleScroll }>Nosotros</a></li>
                    <li><a href="#contacto" onClick={ handleScroll }>Contacto</a></li>
                </ul>
            </div>
            <ul className='list-menu'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
        </>
    );
};
