import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGifs( category ) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const setGifs = async () => {
        const newImages = await getGifs(category)

        setTimeout(() => {
            setImages(newImages);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        setGifs();
    }, []);
  return {
    images,
    isLoading,
  }
}
