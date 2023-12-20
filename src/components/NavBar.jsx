import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const NavBar = () => {

    const [open, setOpen] = useState(false);

    const handleMenuMobile = () => {
        setOpen(!open)
    }

    return (
        <>
        <div>
            <div className='bg-white'>
                {
                    open 
                    ? <FontAwesomeIcon icon={faXmark} onClick={ handleMenuMobile } className='button-menu'/>
                    : <FontAwesomeIcon icon={faBars} onClick={ handleMenuMobile } className='button-menu'/>
                }
            </div>
            <div className={`${open ? 'menu-mobile-display' : 'menu-mobile'}`}>
                
            </div>
        </div>
        <ul className='list-menu'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        </>
    )
}
