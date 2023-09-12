import React, { useEffect, useState, useCallback } from "react";
import ImageGallery from "react-image-gallery";
import type { ReactImageGalleryItem } from "react-image-gallery";
import type { Image } from './Gallery.types'

import Classes from './Gallery.module.css'

const Gallery = () => {

    const APTID = "5cdd743acbc13b00043ef391"
    const API_URI = `https://lineups-api.com/pro/api/apartments/${APTID}/tour-path/Default`

    const [images, setImages] = useState([])

    const dataFetch = useCallback(async () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = { method: 'GET', headers, redirect: 'follow' } as RequestInit;
        const res = await fetch(API_URI, requestOptions)
        const data = await res.json()
        const images = data.images.map((image: Image, idx: number) => ({
            original: image.src,
            srcSet: image.srcset,
            thumbnail: `${image.src}-/resize/250x/`,
            originalAlt: image.alt || `lineups-demo-image-${idx + 1}`,
        } as ReactImageGalleryItem));
        setImages(images);
    }, [])

    useEffect(() => {
        dataFetch()
    }, []);

    return (
        <div className={Classes.gallery}>
            {images.length ? (
                <>
                    <div>Loaded {images.length} images</div>
                    <ImageGallery
                        items={images}
                        lazyLoad
                        showNav
                        showPlayButton={false}
                        showThumbnails
                        showFullscreenButton
                        thumbnailPosition="bottom"
                    />
                </>
            ) : <div>Loading...</ div>}
        </div>
    )
}

export default Gallery