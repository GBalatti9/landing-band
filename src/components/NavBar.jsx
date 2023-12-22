import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const NavBar = () => {

    const [ open, setOpen ] = useState(false);

    const handleMenuMobile = () => {
        setOpen(!open);
    };

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
                    <li><a href="">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
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
