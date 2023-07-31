export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dUcSS64A053FxEJIsn7qwQkMoKJJI90J&q=${ category }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    return gifs;
};