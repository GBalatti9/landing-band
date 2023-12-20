import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleMenuMobile = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='bg-white'>
                <FontAwesomeIcon
                    icon={open ? faTimes : faBars}
                    onClick={handleMenuMobile}
                    className='button-menu'
                />
            </div>
            <div className={`menu-mobile ${open ? 'active' : ''}`}>
                {/* Contenido del menú móvil */}
                <ul className='list-menu'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    );
};
