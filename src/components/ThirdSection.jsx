import './ThirdSection.css';
import { Info } from './Info';
import { ImageGallery } from './ImageGallery';

export const ThirdSection = () => {
    return (
        <div className='third-section-container' id='nosotros'>
            <Info />
            <ImageGallery />
        </div>
    )
}
