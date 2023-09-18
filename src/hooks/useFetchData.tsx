import React, { useEffect, useState, useCallback } from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";
import type { Image } from '../components/Gallery/Gallery.types'

const useFetchData = (tempUri: string = '') => {

    const API_URI = import.meta.env.VITE_API_URI || tempUri

    const [images, setImages] = useState([])

    const dataFetch = useCallback(async () => {

        if(!API_URI) return

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = { method: 'GET', headers, redirect: 'follow' } as RequestInit;
        const res = await fetch(API_URI, requestOptions)
        const data = await res.json()
        const images = await data.images.map((image: Image, idx: number) => ({
            original: image.src,
            srcSet: image.srcset,
            thumbnail: image.thumbnail || `${image.src}-/resize/250x/`,
            originalAlt: image.alt || `demo-image-${idx + 1}`,
            loading: "eager",
            thumbnailLoading: "eager",
        } as ReactImageGalleryItem));
        setImages(images);
    }, [])

    useEffect(() => {
        dataFetch()
    }, []);

    return images

}

export default useFetchData