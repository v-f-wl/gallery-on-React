import cl from 'classnames'

import {Photo, CommonClassProps } from "../types";
import styles from './index.module.scss'

interface MainPhotoProps extends CommonClassProps{
    prevPhoto?: Photo;
    activePhoto: Photo;
    nextPhoto?: Photo;
}
export const MainPhoto: React.FC <MainPhotoProps> = ({
    prevPhoto, 
    activePhoto, 
    nextPhoto,
    className
}) => (
    <div className={cl(className, styles.mainPhoto)}>
        {prevPhoto && (
            <img 
                className={styles.mainPhotoImagePrev}
                src={prevPhoto.src} 
                alt={prevPhoto.description} 
            />
        )}
        <img 
            className={styles.mainPhotoImage}
            src={activePhoto.src} 
            alt={activePhoto.description} 
        />
        {nextPhoto && (
            <img 
            className={styles.mainPhotoImageNext}
            src={nextPhoto.src} 
            alt={nextPhoto.description} 
        />
        )}
    </div>
)