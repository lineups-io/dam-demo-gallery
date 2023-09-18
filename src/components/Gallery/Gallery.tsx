import React, { useCallback, useEffect, useState } from 'react';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import ImageGallery from 'react-image-gallery';

interface Image {
    id: string;
    src: string;
    srcset: string;
    alt?: string;
}

const API_URI = 'https://lineups-api.com/pro/api/apartments/5cdd743acbc13b00043ef391/tour-path/Default'

const Gallery = () => {

    const [loaded, setLoaded] = useState(false)

    const [images, setImages] = useState([])

    const dataFetch = useCallback(async () => {

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = { method: 'GET', headers, redirect: 'follow' } as RequestInit;
        const res = await fetch(API_URI, requestOptions)
        const data = await res.json()
        const images = await data.images.map((image: Image, idx: number) => ({
            original: image.src,
            srcSet: image.srcset,
            thumbnail: `${image.src}-/resize/250x/`,
            originalAlt: image.alt || `demo-image-${idx + 1}`,
            loading: "eager",
            thumbnailLoading: "eager",
        } as ReactImageGalleryItem));
        setImages(images);
    }, [])

    useEffect(() => {
        dataFetch()
    }, []);

    return (
        <div>
            {loaded && <div className="small">Loaded {images.length} images</div>}
            <ImageGallery
                items={images}
                lazyLoad={!loaded}
                showNav={loaded}
                showPlayButton={loaded}
                showThumbnails={loaded}
                showFullscreenButton={loaded}
                thumbnailPosition="bottom"
                onImageLoad={() => setLoaded(true)}
            />
            {!loaded && <div>Loading...</div>}
        </div>
    )
}

export default Gallery