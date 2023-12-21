import './ThirdSection.css';
import { Info } from './Info';
import { ImageGallery } from './ImageGallery';

export const ThirdSection = () => {
    return (
        <div className='third-section-container'>
            <Info />
            <ImageGallery />
        </div>
    )
}
