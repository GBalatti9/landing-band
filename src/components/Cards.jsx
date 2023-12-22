import { useState } from 'react'
import './Cards.css'

import { luis, fede, gas, marcos } from "./Images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const bandMembers = [
    {
        id: 1,
        name: 'Luis',
        lastname: 'Dollera',
        role: 'Cantante',
        imgs: luis,
    },
    {
        id: 2,
        name: 'Federico',
        lastname: 'Granado',
        role: 'Guitarrista',
        imgs: fede,
    },
    {
        id: 3,
        name: 'Gastón',
        lastname: 'Balatti',
        role: 'Baterista',
        imgs: gas,
    },
    {
        id: 4,
        name: 'Marcos',
        lastname: 'Calatrava',
        role: 'Bajista',
        imgs: marcos,
    }
]

export const Cards = () => {
    const [ open, setOpen ] = useState(false);
    const [ images, setImages ] = useState([]);
    const [ counter , setCounter ] = useState(0);


    const handleImageClick = ( name ) => {
        const findMember = bandMembers.find(( member ) => member.name === name);
        const imgArr = findMember.imgs;
        setImages( imgArr );
        setOpen( !open );
    }

    const closeImage = () => {
        setOpen( !open );
        reset();
    }

    const nextImage = () => {
        setCounter( counter + 1 );
    }

    const prevImage = () => {
        if (counter === 0) {
            setCounter( images.length - 1 );
        } else {
            setCounter( counter - 1 );
        }
    }

    const reset = () => {
        setCounter( 0 );
    }


    return (
        <div className='card-container'>
        {
            bandMembers.map(( member ) => (
                <div className="card" onClick={() => handleImageClick( member.name ) } key={ member.id }>
                    <img src={ member.imgs[0] } alt="image" className='image-card'/>
                    <div className='member-info' >
                        <p className='member-name'>
                        { member.name } { member.lastname }
                        <br />
                        <span className='member-role'>
                        { member.role }
                        </span>
                        </p>
                    </div>
                </div>
            ))
        }
        {
            open && images.length > 0
            ? <div className='card-container-image-display'>
                <img src={ images[counter] ? images[counter] : reset() } alt="" />
                <button className='close-card' onClick={ closeImage }>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className='button-controllers'>
                <button className='btn-next' onClick={ prevImage }>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className='btn-next' onClick={ nextImage }>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
            </div>
            : ''
        }
        </div>
    )
}
