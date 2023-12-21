import './Cards.css'

import { luis, fede, gas, marcos } from "./Images"

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
    return (
        <div className='card-container'>
        {
            bandMembers.map(( member ) => (
                <div className="card">
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
        </div>
    )
}
