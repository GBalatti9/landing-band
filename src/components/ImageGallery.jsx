import { Dialog, DialogContent, DialogTitle, ImageList, ImageListItem } from '@mui/material';
import { itemData } from './Images';
import './ImageGallery.css';
import { useState } from 'react';

const srcset = (image, size, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const ImageGallery = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpenDialog(true);
    };

    return (
        <div className='image-gallery-component-gallery'>

            <ImageList
                className='image-list'
                variant="quilted"
                cols={3}
                // rowHeight={200}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            onClick={() => handleImageClick( item.img )}
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog open={ openDialog } onClose={ handleCloseDialog } className='dialog-container' >
                <DialogContent className='dialog'>
                    {
                        selectedImage && (
                            <img
                                src={selectedImage}
                                alt='alt'
                                />
                        )
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}
