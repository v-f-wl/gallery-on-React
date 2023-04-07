import { Photo} from "./types"
import styles from './index.module.scss'
import { MainPhoto } from "./MainPhoto"
import { PreviewGallery } from "./PreviewGallery"
import { Navigation } from "./Navigation"
import { useState } from "react"

interface GalleryProps{
    photos: Photo[]
}
export const Gallery: React.FC <GalleryProps> = ({photos}) => {
    if(!photos.length){
        console.log('sfdd')
        return null
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0)
    const activePhoto = photos[indexActivePhoto]
    const prevPhoto = photos[indexActivePhoto - 1]
    const nextPhoto = photos[indexActivePhoto + 1]
    return(
        <div className={styles.wolfGallery}>
            <div className={styles.wolfGalleryContainer}>
                <MainPhoto
                    prevPhoto = {prevPhoto}
                    activePhoto = {activePhoto}
                    nextPhoto = {nextPhoto}
                    className = {styles.wolfGalleryMainPhoto}
                />
                <Navigation
                    className ={styles.wolfGalleryNavigation}
                    disabledPrev = {!prevPhoto}
                    disabledNext = {!nextPhoto}
                    onPrevClick = {() => {
                        setIndexActivePhoto(indexActivePhoto - 1)
                    }}
                    onNextClick = {() => {
                        setIndexActivePhoto(indexActivePhoto + 1)
                    }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex = {indexActivePhoto}
                photos = {photos}
                className = {styles.wolfGalleryPreviewList}
            />
        </div>
    )
    
}
