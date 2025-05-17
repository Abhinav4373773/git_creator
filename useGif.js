import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [loading, setLoading] = useState('false');
    const [gif, setGif] = useState('');

    async function fetchApi() {
        setLoading(true);

        //   const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imnsrc = data.data.images.downsized_large.url;
        setGif(imnsrc);
        setLoading(false);
    }
    useEffect(() => {
        // fetchApi;
        fetchApi('car');
    }, []);
    return { loading, gif, fetchApi }
    
};

export default useGif
