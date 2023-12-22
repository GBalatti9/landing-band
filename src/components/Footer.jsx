import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram ,faYoutube } from "@fortawesome/free-brands-svg-icons";

const footerItems = [
    { icon: faInstagram, ref: 'https://www.instagram.com/tragoamargook/' },
    { icon: faYoutube, ref: 'https://www.youtube.com/@tragoamargo8072' }
];

export const Footer = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '20px', padding: '10px' }}>
            {
                footerItems.map((item, i) => (
                    <a href={item.ref} key={item + i}><FontAwesomeIcon icon={item.icon} /></a>
                ))
            }
        </div>
    );
};
