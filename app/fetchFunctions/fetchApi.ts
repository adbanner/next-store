
const fetchApi = async(path:string) => {
    const res = await fetch(`https://store-api-olive.vercel.app/${path}`)
    //const res = await fetch(`https://store-api-olive.vercel.app/`)
    console.log(res.json())
    return res.json()
};

export default fetchApi
