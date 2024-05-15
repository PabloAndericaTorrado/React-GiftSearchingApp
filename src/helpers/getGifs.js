export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7Iy4p029OQ0WHGueCzCWOZH2gJDWIDQt&q=${category}&limit=10y`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}