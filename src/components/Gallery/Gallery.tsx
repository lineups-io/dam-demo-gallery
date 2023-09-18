import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import useFetchData from '../../hooks/useFetchData'

const Gallery = () => {

    const [loaded, setLoaded] = useState(false)

    const images = useFetchData(
        // Set your own API in the .env file as `VITE_API_URI` then uncomment the line below
        'https://lineups-api.com/pro/api/apartments/5cdd743acbc13b00043ef391/tour-path/Default'
    )

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