import {Photo, CommonClassProps } from "../types";
import cl from 'classnames'
import styles from './index.module.scss'
import { useEffect, useRef, useMemo} from "react";

interface PreviewGalleryProps extends CommonClassProps{
    activePhotoIndex: number;
    photos: Photo[];
}
export const PreviewGallery: React.FC <PreviewGalleryProps> = ({
    activePhotoIndex, 
    photos,
    className
}) => {
    if(!photos){
        return null
    }

    const prevContainer = useRef<HTMLUListElement>(null)
    useEffect(() => {
        if(!prevContainer.current){
            return
        }
        prevContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`
    },[activePhotoIndex])

    return (
        <div className={cl(styles.previewGallery, className)}>
            {useMemo(() => (
                <ul
                    className={styles.previewGalleryTrack}
                    ref={prevContainer}
                >
                    {photos.map((photo) => (
                        <li
                            key = {photo.id}
                            className={styles.previewGalleryPreview}
                        >
                            <img 
                                src={photo.preview}
                                alt={photo.description} 
                                className={styles.previewGalleryImage}
                            />
                        </li>
                    ))}
                </ul>
            ), [])}
            <div className={styles.previewGalleryCover}>
                {activePhotoIndex + 1} / {photos.length}
            </div>
        </div>
    )
}
